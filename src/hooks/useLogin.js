import { useRef, useState } from 'react';
import { checkValidate } from '../utils/validateForm';
import { auth } from '../utils/firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/slices/userSlice';

const useLogin = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    // using useRef for referencing the value of input field of name, email and password
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const form = useRef(null)

    // handleForm
    const handleForm = (e) => {
        e.preventDefault()
        // validate form
        const message = checkValidate(!isSignInForm && name.current.value, email.current.value, password.current.value, isSignInForm)
        setErrorMessage(message)
        if (message) return;

        // process to authentication
        // signIn or signUp
        if (!isSignInForm) {
            // SignUp Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user
                    // update your fullName using updateProfile function which is given by firebase
                    updateProfile(user, { displayName: name.current.value })
                        .then(() => {
                            const { uid, email, displayName } = auth.currentUser
                            dispatch(addUser(
                                { uid, email, displayName }
                            ))
                        }).catch((error) => {
                            setErrorMessage(error.message)
                        })
                    resetForm()
                })
                .catch((error) => {
                    setErrorMessage("Email already in use")
                })
        } else {
            // SignIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    resetForm()
                })
                .catch((error) => {
                    setErrorMessage("Email or password is wrong")
                })
        }
    }

    // Change signIn to SignUp function or vice versa
    const changeForm = () => {
        setIsSignInForm(!isSignInForm)
        setErrorMessage(null)
        form.current.reset()
    }

    const resetForm = () => {
        setTimeout(() => {
            form.current.reset()
        }, 600)
    }

    return { isSignInForm, errorMessage, name, email, password, loading, form, setIsSignInForm, setErrorMessage, handleForm, changeForm, setLoading }
}

export default useLogin;