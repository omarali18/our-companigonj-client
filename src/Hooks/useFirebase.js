import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile, getIdToken, onAuthStateChanged } from "firebase/auth";
import { Password } from "@mui/icons-material";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";

// Initialize firebase app
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();;

    // Register user
    const registerUser = (email, Password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, Password)
            .then(result => {
                setAuthError("")
                const newUser = { email, displayName: name }
                setUser(newUser);

                // save user in database
                saveUsers(email, name, "POST", Password)

                // update user profile or name in firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { })
                    .catch((error) => { })
                history.replace("/")
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // login user
    const loginUser = (email, Password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, Password)
            .then(result => {
                const destination = location?.state?.from || "/"
                history.replace(destination)
                setAuthError("")
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // Logiut user
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setAuthError("")
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // Signin With Google
    const signinWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                const destination = location?.state?.from || "/"
                history.replace(destination)
                saveUsers(user.email, user.displayName, "PUT", Password)
                setAuthError("")
            })
            .catch(error => {
                setAuthError(error.message)
                console.log("pai pai pai");
            })
            .finally(() => setIsLoading(false));
    }

    // Onserver user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [auth])

    // save user in database
    const saveUsers = (email, displayName, method, Password) => {
        const user = { email, displayName, Password: "" }
        fetch("https://aqueous-plains-02922.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }
    useEffect(() => {
        // const email = user.email
        // if (email) {

        fetch(`https://aqueous-plains-02922.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            })
        // }
    }, [user.email])

    return {
        user,
        admin,
        isLoading,
        token,
        authError,
        registerUser,
        loginUser,
        signinWithGoogle,
        logout,
    }
}

export default useFirebase