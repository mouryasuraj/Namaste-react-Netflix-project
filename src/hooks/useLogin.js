import { checkValidate } from '../utils/validateForm';
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/slices/userSlice';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // using useRef for referencing the value of input field of name, email and password
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)


    // handleForm
    const handleForm = (e) => {
        const form = document.querySelector('form')
        e.preventDefault()
        // validate form
        const message = checkValidate(!isSignInForm && name.current.value, email.current.value, password.current.value, isSignInForm)
        console.log(message);
        setErrorMessage(message)
        if (message) return;

        // process to authentication
        // signIn or signUp
        if (!isSignInForm) {
            // SignUp Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    setLoading(true)
                    const user = userCredential.user
                    sendEmailVerficationWithUpdateProfile(user, form)
                })
                .catch((error) => {
                    setLoading(true)
                    setTimeout(() => {
                        setErrorMessage("Email already in use.")
                        setLoading(false)
                    }, 600);
                })
        } else {
            // SignIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    setLoading(true)
                    const user = userCredential.user
                    usersEmailVerified(user, form)
                })
                .catch((error) => {
                    setLoading(true)
                    setTimeout(() => {
                        setErrorMessage("Email or password is wrong.")
                        setLoading(false)
                    }, 600);
                })
        }
    }

    // sendEmail Verification or sign Up
    const sendEmailVerficationWithUpdateProfile = (user, form) => {
        // update your fullName using updateProfile function which is given by firebase
        updateProfile(user, { displayName: name.current.value })
            .then(() => {
                sendEmailVerification(user)
                    .then(() => {
                        setTimeout(() => {
                            changeForm()
                            setSuccessMsg('Please verify your email and login from here.')
                            setLoading(false)
                            form.reset()
                        }, 300)
                    }).catch((errorMessage))

            }).catch((error) => {
                setErrorMessage(error.message)
            })
    }

    // isUsersEmailVerified or sign In
    const usersEmailVerified = (user, form) => {
        if (user.emailVerified) {
            setTimeout(() => {
                const { uid, email, displayName } = auth.currentUser
                dispatch(addUser({ uid, email, displayName }))
                navigate('/browse')
                setLoading(false)
            }, 500)
            form.reset()
        } else {
            setLoading(true)
            setTimeout(() => {
                setErrorMessage('Email is not verified.')
                setLoading(false)
            }, 500);
        }
    }


    // Change signIn to SignUp function or vice versa
    const changeForm = () => {
        setIsSignInForm(!isSignInForm)
        setErrorMessage(null)
        setSuccessMsg(null)
        document.querySelector('form').reset()
    }

    return { isSignInForm, errorMessage, successMsg, name, email, loading, password, setSuccessMsg, setLoading, setErrorMessage, setIsSignInForm, handleForm, changeForm }
}

export default useLogin;