import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import store from "../store";

export const getListOfQuestions = async() => { 
    const db = getFirestore(); 
    const q = query(collection(db, "questions") );

    const querySnapshot = await getDocs(q);
    const questions = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      questions.push(doc.data());
    });
    store.questions.set(questions)
}
