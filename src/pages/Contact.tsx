import * as motion from "motion/react-client";
import { useState, FormEvent } from "react";
import { MapPin, Mail, Phone, Calendar, MessageSquare } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'message' | 'booking'>('booking');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const service = (document.getElementById('service') as HTMLSelectElement).value;
    const budget = (document.getElementById('budget') as HTMLSelectElement).value;
    const description = (document.getElementById('description') as HTMLTextAreaElement).value;

    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nService: ${service}\nBudget: ${budget}\n\nProject Description:\n${description}`;

    window.location.href = `mailto:githubtechnixar@gmail.com?subject=New Consultation Request - ${name}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="w-full bg-gray-50">
      <section className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Let's Build Something <span className="text-primary-yellow">Great Together</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Reach out to our team of experts to discuss your upcoming project or request a free consultation.
          </motion.p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col lg:flex-row border border-gray-100 relative -mt-32 z-10">
          
          {/* Contact Form */}
          <div className="w-full lg:w-3/5 p-8 sm:p-12">
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
              <button 
                onClick={() => setActiveTab('booking')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md text-sm font-bold transition-all ${activeTab === 'booking' ? 'bg-white text-charcoal shadow-sm' : 'text-gray-500 hover:text-charcoal'}`}
              >
                <Calendar size={18} /> Book Appointment
              </button>
              <button 
                onClick={() => setActiveTab('message')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md text-sm font-bold transition-all ${activeTab === 'message' ? 'bg-white text-charcoal shadow-sm' : 'text-gray-500 hover:text-charcoal'}`}
              >
                <MessageSquare size={18} /> Send Message
              </button>
            </div>
            
            {activeTab === 'booking' ? (
              <BookingForm />
            ) : (
              isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h4>
                  <p className="text-green-700">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-semibold text-green-700 hover:text-green-800 underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input id="name" required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input id="email" required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-gray-700">Company Name</label>
                    <input id="company" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-colors" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input id="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-colors" placeholder="+65 8000 0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold text-gray-700">Service Required</label>
                    <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-colors bg-white">
                      <option>Custom Software Development</option>
                      <option>Fintech Solutions</option>
                      <option>Mobile App Development</option>
                      <option>Cloud & DevOps</option>
                      <option>AI & Automation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-semibold text-gray-700">Project Budget</label>
                    <select id="budget" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-colors bg-white">
                      <option>Less than $10,000</option>
                      <option>$10,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>More than $100,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-semibold text-gray-700">Project Description</label>
                  <textarea id="description" required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-colors resize-none" placeholder="Tell us about your project goals and requirements..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-charcoal text-white font-bold rounded-lg shadow-md hover:bg-black transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                  ) : null}
                  Request Consultation
                </button>
              </form>
              )
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="w-full lg:w-2/5 bg-charcoal text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none text-white">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.1,-46.3C90.4,-33.5,96.1,-18.1,96.5,-2.5C96.9,13.1,92,28.9,82.9,42.4C73.8,55.9,60.5,67.1,45.8,74.7C31.1,82.3,15.5,86.3,-0.1,86.5C-15.7,86.7,-31.4,83.1,-45.5,75.2C-59.6,67.3,-72.1,55,-79.8,40.6C-87.5,26.2,-90.4,9.6,-88,-6.4C-85.6,-22.4,-77.9,-37.8,-67.2,-50.2C-56.5,-62.6,-42.8,-72,-28.9,-77.7C-15,-83.4,-0.9,-85.4,14.6,-83.1C30.1,-80.8,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary-yellow/20 flex items-center justify-center text-primary-yellow shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Office</h4>
                  <address className="not-italic text-gray-300 leading-relaxed">
                    Technixar<br/>
                    9 Raffles Place, #29-05<br/>
                    Republic Plaza<br/>
                    Singapore 048619
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary-yellow/20 flex items-center justify-center text-primary-yellow shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a href="mailto:info@technixar.com" className="text-gray-300 hover:text-white transition-colors">info@technixar.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary-yellow/20 flex items-center justify-center text-primary-yellow shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-gray-300 italic">To be updated</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <h4 className="font-bold text-lg mb-4">Connect with us</h4>
              <p className="text-gray-400 text-sm mb-4">Follow our social channels for updates and industry insights.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-black transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-black transition-colors" aria-label="X (Twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-black transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
