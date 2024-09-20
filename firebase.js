// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGEabI5yH2ola4HrrJRao7iP6Dokwv0_8",
  authDomain: "innoblog-46b50.firebaseapp.com",
  projectId: "innoblog-46b50",
  storageBucket: "innoblog-46b50.appspot.com",
  messagingSenderId: "79064787066",
  appId: "1:79064787066:web:dc59df533db4bcfd9b73c3",
  measurementId: "G-67R9L9CWM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging (FCM)
const messaging = getMessaging(app);

// Function to request permission for notifications and get the token
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: 'YOUR_PUBLIC_VAPID_KEY' // This is provided by Firebase
      });
      console.log("FCM Token:", token);
      return token;
    } else {
      console.error("Notification permission denied");
    }
  } catch (error) {
    console.error("An error occurred while getting the token:", error);
  }
};

// Listen for foreground messages
onMessage(messaging, (payload) => {
  console.log("Message received: ", payload);
  // Optionally, display a notification
  new Notification(payload.notification.title, {
    body: payload.notification.body,
  });
});
