import { useRef, useState } from 'react';
import Header from './Header'
import { checkValidate } from '../utils/validateForm';
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)

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
            // SignUp
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log(user);
                    setSuccessMsg('Signed Up successfull. Please log In')
                    form.reset()
                    setTimeout(() => {
                        setSuccessMsg(null)
                    }, 2000);
                })
                .catch((error) => {
                    setErrorMessage(error.message)
                })
        } else {
            // SignIn
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log(user);
                    setSuccessMsg('Logged in Successfully')
                    form.reset()
                    setTimeout(() => {
                        setSuccessMsg(null)
                    }, 2000);
                })
                .catch((error) => {
                    setErrorMessage("Email or password is wrong")
                })
        }
    }

    // Change signIn to SignUp function or vice versa
    const changeForm = () => {
        setIsSignInForm(!isSignInForm)
        setErrorMessage('')
        document.querySelector('form').reset()
    }

    return (
        <div className="w-[100%] min-h-[150vh]  bg-cover relative bg-black sm:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
            <div className='sm:w-[100%] sm:min-h-[100vh] fixed  sm:bg-black sm:opacity-50'></div>
            {/* Sign In Form */}
            <div className='absolute top-0 w-full'>
                <Header />
                <div className='sm:max-w-[500px] mx-auto sm:px-16 sm:py-12 px-5 mt-6 relative rounded-md bg-black bg-opacity-75'>
                    <h2 className='text-white sm:text-4xl text-2xl font-bold  my-5'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
                    <form onSubmit={handleForm} className='flex flex-col'>
                        {!isSignInForm && <input
                            ref={name}
                            className='outline-none bg-[rgb(15,15,15,0.8)] text-gray-100 border border-gray-500 rounded-[5px] focus:border-2 focus:border-gray-50 px-4 py-4 mt-5'
                            type="text"
                            placeholder='Full Name' />}
                        <input
                            ref={email}
                            className='outline-none bg-[rgb(15,15,15,0.8)] text-gray-100 border border-gray-500 rounded-[5px] focus:border-2  focus:border-gray-50 px-4 py-4 mt-5'
                            type="text"
                            placeholder='Email Address' />
                        <input
                            ref={password}
                            className='outline-none bg-[rgba(15,15,15,0.8)] text-gray-100 border border-gray-500 rounded-[5px] focus:border-2  focus:border-gray-50 px-4 py-4 mt-5'
                            type="password"
                            placeholder='Password' />
                        {errorMessage && <p className='my-3 text-red-500 font-semibold text-[15px]'>{errorMessage}</p>}
                        {successMsg && <p className='my-3 text-green-500 font-semibold text-[15px]'>{successMsg}</p>}
                        <button className='w-full text-white text-xl py-3 mt-4 bg-[#C11119] hover:opacity-90'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                    </form>
                    <div className='text-lg font-semibold flex gap-2 mt-6'>
                        <p className='text-gray-400'>{isSignInForm ? 'New to Netflix?' : 'Already have an account?'}</p>
                        <button onClick={changeForm} className='text-white hover:underline'>{isSignInForm ? 'Sign up now' : 'Sign In'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;