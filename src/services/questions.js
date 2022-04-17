import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import store from "../store";

export const getListOfQuestions = async () => {
  const db = getFirestore();
  const q = query(collection(db, "questions"));

  const querySnapshot = await getDocs(q);
  const questions = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    questions.push(doc.data());
  });
  store.questions.set(questions);
};

export const submitAnswers = async (answers, onSuccess, onFailure, isLast) => {
  const isCorrect = await checkCorrect(answers);
  answers = { isCorrect, ...answers };
  const db = getFirestore();
  if (answers.id) {
    //update
    setDoc(doc(db, "submissions", answers.id), answers, { merge: true })
      .then(() => {
        if (onSuccess) {
          if (isLast) {
            const calculateResults = async () => {
              const correctnumber = await countCorrect(answers.uid);
              const incorrectnumber = await countNotCorrect(answers.uid);
              await submitResults({
                correctnumber,
                incorrectnumber,
                uid: answers.uid,
              });
            };
            calculateResults();
          }
          onSuccess(answers);
        }
      })
      .catch((error) => {
        console.log("emailNotSent");
        // ..
        if (onFailure) {
          onFailure(error.message);
        }
      });
  } else {
    addDoc(collection(db, "submissions"), answers)
      .then((answers) => {
        if (onSuccess) {
          onSuccess(answers);
        }
      })
      .catch((error) => {
        console.log(error.message);
        // ..
        if (onFailure) {
          onFailure(error.message);
        }
      });
  }
};

export const getAnswers = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "submissions"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);
  const answers = {};
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    answers[data.questionid] = data;
  });
  store.answers.set(answers);
};

export const checkCorrect = async ({ questionid, answer }) => {
  const db = getFirestore();
  const q = query(
    collection(db, "answers"),
    where("questionid", "==", questionid),
    where("answer", "==", answer)
  );

  const querySnapshot = await getDocs(q);
  const isCorrect = querySnapshot.size === 1;
  return isCorrect;
};

export const countCorrect = async (uid) => {
  const db = getFirestore();
  const q = query(
    collection(db, "submissions"),
    where("uid", "==", uid),
    where("isCorrect", "==", true)
  );

  const querySnapshot = await getDocs(q);
  const numberCorrect = querySnapshot.size;
  return numberCorrect;
};
export const countNotCorrect = async (uid) => {
  const db = getFirestore();
  const q = query(
    collection(db, "submissions"),
    where("uid", " == ", uid),
    where("isCorrect", " == ", false)
  );

  const querySnapshot = await getDocs(q);
  const inCorrect = querySnapshot.size;
  return inCorrect;
};

export const getResults = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "submissions"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);
  const results = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    results.push(doc.data());
  });
  store.results.set(results);
};

export const showResults = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "results"),
    where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const results = []
  querySnapshot.forEach((doc) => {
 
    results.push(doc.data())
 
  });
  // console.log("got here", questions)
  store.results.set(results)
}


const submitResults = async (results) => {
  const db = getFirestore();
  setDoc(doc(db, "results", results.uid), results, { merge: true })
    .then((d) => {})
    .catch((error) => {
      console.log("results not submitted", error.message);
      // ..
      throw error;
    });
};

