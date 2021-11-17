import {
    getFirestore,
    setDoc,
    doc, } from "firebase/firestore";

    const firestore = getFirestore();

export  function createUser(uid, data) {
     const userDoc =  doc(firestore, 'users1/'+uid);
    return setDoc(userDoc, {uid, ...data}, {merge: true});
}