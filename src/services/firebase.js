import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCAvvDgI0KSBGu0zmfBhsk3Gi1eNiaZnFY",
    authDomain: "messager-78a62.firebaseapp.com",
    projectId: "messager-78a62",
    storageBucket: "messager-78a62.appspot.com",
    messagingSenderId: "600019124160",
    appId: "1:600019124160:web:fc31cf40bdff2bdabf5225"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const register = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const chatsRef = ref(db, 'chats')

export const getChatById = (chatId) => ref(db, `chats/${chatId}`)

export const getMessageListById = (chatId) => ref(db, `chats/${chatId}/messageList`)