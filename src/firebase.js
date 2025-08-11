import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLzxf4OPZEml7GbRFT_ONp0W_4tcRXPJ8",
  authDomain: "portfolio-likes-de0a7.firebaseapp.com",
  projectId: "portfolio-likes-de0a7",
  storageBucket: "portfolio-likes-de0a7.firebasestorage.app",
  messagingSenderId: "660453376297",
  appId: "1:660453376297:web:648470f1878de44bc77738",
  measurementId: "G-L7M3WFLPB3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 🔹 Test function
async function testFirestore() {
  const docRef = doc(db, "likes", "portfolio");
  const docSnap = await getDoc(docRef);
  console.log("TEST DATA:", docSnap.data());
}
testFirestore();
