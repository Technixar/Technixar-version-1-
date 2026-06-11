import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase, handling the case where config might be missing/dummy
let app;
let auth: ReturnType<typeof getAuth>;

try {
  if (firebaseConfig.apiKey !== 'MISSING_CONFIG_DUE_TO_PLATFORM_ERROR') {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  }
} catch (e) {
  console.error("Firebase initialized failed", e);
}

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/calendar.events'); 

let isSigningIn = false;
let cachedAccessToken: string | null = null;

export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  if (!auth) {
    if (onAuthFailure) onAuthFailure();
    return () => {};
  }
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // We have a user but no token in memory (page reload). 
        // We typically can't get the Google access token again without re-authenticating,
        // unless we used another mechanism. For now, require re-auth.
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  if (!auth) throw new Error("Firebase not properly configured.");
  try {
    isSigningIn = true;
    provider.setCustomParameters({
      prompt: 'consent'
    });
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Failed to get access token from Firebase Auth');
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Sign in error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const logout = async () => {
  if (!auth) return;
  await auth.signOut();
  cachedAccessToken = null;
};
