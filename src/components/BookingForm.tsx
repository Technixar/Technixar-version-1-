import { useState, useEffect } from "react";
import { initAuth, googleSignIn, getAccessToken } from "@/lib/auth";
import { User } from 'firebase/auth';
import { Calendar as CalendarIcon, Clock, ArrowRight } from "lucide-react";
import { format, addDays, setHours, setMinutes, startOfDay } from "date-fns";

export function BookingForm() {
  const [needsAuth, setNeedsAuth] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date>(addDays(new Date(), 1));
  const [selectedTime, setSelectedTime] = useState<string>("10:00");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (u, token) => {
        setUser(u);
        setNeedsAuth(false);
      },
      () => {
        setUser(null);
        setNeedsAuth(true);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setError(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setNeedsAuth(false);
      }
    } catch (err: any) {
      console.error('Login failed:', err);
      // Fallback for platform error handling where config fails
      if (err.message?.includes("Firebase not properly configured")) {
        setError("Firebase configuration is missing or invalid. Please check your setup.");
      } else if (err.code === 'auth/unauthorized-domain') {
        setError("This domain is not authorized for OAuth. Wait a moment or open in a new tab.");
      } else if (err.code === 'auth/popup-closed-by-user' || err.message?.includes('popup')) {
        setError("Popup was closed or blocked. Please open the app in a new tab and try again.");
      } else {
        setError(`Could not sign in with Google: ${err.message || 'Unknown error'}`);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const availableTimes = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

  const handleBooking = async () => {
    const confirmed = window.confirm("Are you sure you want to schedule this consultation on your Google Calendar? An invitation will be sent to info@technixar.com.");
    if (!confirmed) return;

    setIsSubmitting(true);
    setError(null);
    try {
      const accessToken = await getAccessToken();
      if (!accessToken) throw new Error("No access token available. Please sign in again.");

      const [hours, minutes] = selectedTime.split(':').map(Number);
      const startDateTime = setMinutes(setHours(startOfDay(selectedDate), hours), minutes);
      const endDateTime = addDays(startDateTime, 0);
      endDateTime.setHours(startDateTime.getHours() + 1);

      const event = {
        summary: `Technixar Consultation - ${user?.displayName || 'Client'}`,
        description: `Consultation request from ${user?.email}`,
        start: { dateTime: startDateTime.toISOString() },
        end: { dateTime: endDateTime.toISOString() },
        attendees: [{ email: 'info@technixar.com' }]
      };

      const res = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event)
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error?.message || "Failed to create calendar event");
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred while booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (needsAuth) {
    return (
      <div className="w-full text-center">
        <div className="mb-6">
          <CalendarIcon className="w-12 h-12 text-primary-yellow mx-auto mb-4" />
          <h3 className="text-xl font-bold text-charcoal mb-2">Book an Appointment</h3>
          <p className="text-gray-500 mb-6 text-sm">
            Sign in with your Google account to directly schedule a consultation on your calendar.
          </p>
        </div>
        
        <button 
          onClick={handleLogin}
          disabled={isLoggingIn}
          className="gsi-material-button w-full sm:w-auto mx-auto border border-gray-300 rounded-lg py-3 px-6 hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 bg-white text-gray-700 font-semibold shadow-sm"
        >
          {isLoggingIn ? (
            <span className="opacity-70">Signing in...</span>
          ) : (
            <>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
              <span>Sign in with Google</span>
            </>
          )}
        </button>
        {error && <p className="mt-4 text-red-500 text-sm font-medium">{error}</p>}
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h4 className="text-xl font-bold text-green-800 mb-2">Meeting Scheduled!</h4>
        <p className="text-green-700 mb-6 font-medium">Your consultation has been booked on your Google Calendar.</p>
        <p className="text-gray-600 text-sm">An invitation has also been sent to info@technixar.com.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
        <div>
          <h3 className="text-xl font-bold text-charcoal">Schedule Consultation</h3>
          <p className="text-sm text-gray-500 mt-1">Hello, {user?.displayName || "Guest"}</p>
        </div>
        <button 
          onClick={() => {
            if (window.confirm("Sign out of Google?")) {
              import("@/lib/auth").then(m => m.logout());
            }
          }}
          className="text-sm text-gray-400 hover:text-black underline transition-colors"
        >
          Sign Out
        </button>
      </div>

      {error && <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">{error}</div>}

      <div className="space-y-6">
        {/* Date Selection */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
            <CalendarIcon size={16} /> Select Date
          </label>
          <input 
            type="date"
            min={format(addDays(new Date(), 1), "yyyy-MM-dd")}
            value={format(selectedDate, "yyyy-MM-dd")}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-colors"
          />
        </div>

        {/* Time Selection */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
            <Clock size={16} /> Select Time
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {availableTimes.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 rounded-lg border transition-all text-sm font-medium ${
                  selectedTime === time 
                  ? 'border-charcoal bg-charcoal text-white shadow-md' 
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={handleBooking}
          disabled={isSubmitting}
          className="w-full mt-4 py-4 bg-primary-yellow text-black font-bold rounded-lg shadow-[0_0_15px_rgba(255,193,7,0.3)] hover:shadow-[0_0_20px_rgba(255,193,7,0.5)] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
          ) : <ArrowRight size={20} />}
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
