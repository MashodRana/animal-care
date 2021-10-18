import { useEffect, useState } from "react"
import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut,
    onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                setError(error.message);
            });
    };

    const registerWithEmailPassword = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log("new user credential:", user);
            })
            .catch(error => {
                console.log(error.message);
            })

        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const signInUsingEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            });


    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        registerWithEmailPassword,
        signInUsingEmailPassword
    }


}

export default useFirebase;