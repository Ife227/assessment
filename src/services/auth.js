import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import store from "../store";

export const signUp = ({
    fullname,
    email,
    phonenumber,
    password,
    passwordconfirm
}, onSuccess, onFailure) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, fullname, email, phonenumber, password, passwordconfirm)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: fullname,
            })

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(onFailure) {
                onFailure(error.message);
            }
        });
}

export const signIn = ({ email, password }, onSuccess, onFailure) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            store.user.set({fullName: user?.displayName, email: user.email, emailVerified: user.emailVerified, isAuthenticated: true});
            if(onSuccess) {
                onSuccess();
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(onFailure) {
                onFailure(error.message);
            }
        });
}

export const resetPassword = ({ email }, onSuccess, onFailure) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        if(onSuccess) {
            onSuccess("email sent successfully")
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        if(onFailure) {
            onFailure("invalid email")
        }
      });
}