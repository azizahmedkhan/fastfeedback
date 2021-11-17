import firebaseApp from '@/lib/firebase';
import {
    getFirestore,
    setDoc,
    doc, } from "firebase/firestore";

    const firestore = getFirestore(firebaseApp);

export  function createUser(uid, data) {
     const userDoc =  doc(firestore, 'users/'+uid);
    return setDoc(userDoc, {uid, ...data}, {merge: true});
}