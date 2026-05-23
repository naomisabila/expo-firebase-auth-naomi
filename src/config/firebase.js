import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCjQDqICGnR70gDrLl_tJNSrMWQrgFnkag",
  authDomain: "expo-firebase-auth-naomi.firebaseapp.com",
  projectId: "expo-firebase-auth-naomi",
  storageBucket: "expo-firebase-auth-naomi.firebasestorage.app",
  messagingSenderId: "656811022774",
  appId: "1:656811022774:web:4a1c3ae2a5f6162d3c0917"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default app;