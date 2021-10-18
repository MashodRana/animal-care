import { useEffect, useState } from "react"
import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut,
    onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";
import { useHistory } from "react-router";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const history = useHistory();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                history.push('/home');
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const registerWithEmailPassword = async (name, email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log("new user credential:", user);
            })
            .catch(error => {
                console.log(error.message);
            })

            console.log(name);
        await updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log("name update done.")
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