import { useState } from 'react';
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const handleForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div className="w-[100%] min-h-[150vh]  bg-cover relative bg-black sm:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
            <div className='sm:w-[100%] sm:min-h-[100vh] fixed  sm:bg-black sm:opacity-50'></div>
            {/* Sign In Form */}
            <div className='absolute top-0 w-full'>
                <Header />
                <div className='sm:max-w-[500px] mx-auto sm:px-16 sm:py-12 px-5 mt-6 relative rounded-md bg-black bg-opacity-75'>
                    <h2 className='text-white sm:text-4xl text-2xl font-bold  my-5'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
                    <form className='flex flex-col gap-7'>
                        {!isSignInForm && <input
                            required
                            className='outline-none bg-[rgb(15,15,15,0.8)] text-gray-100 border border-gray-500 rounded-[5px] focus:border-2 focus:border-gray-50 px-4 py-4'
                            type="text"
                            placeholder='Full Name' />}
                        <input
                            required
                            className='outline-none bg-[rgb(15,15,15,0.8)] text-gray-100 border border-gray-500 rounded-[5px] focus:border-2  focus:border-gray-50 px-4 py-4'
                            type="text"
                            placeholder={isSignInForm ? 'Email or phone number' : 'Email Address'} />
                        {!isSignInForm && <input
                            required
                            className='outline-none bg-[rgb(15,15,15,0.8)] text-gray-100 border border-gray-500 rounded-[5px] focus:border-2  focus:border-gray-50 px-4 py-4'
                            type="number"
                            placeholder='Phone Number' />}
                        <input
                            required
                            className='outline-none bg-[rgba(15,15,15,0.8)] text-gray-100 border border-gray-500 rounded-[5px] focus:border-2  focus:border-gray-50 px-4 py-4'
                            type="password"
                            placeholder='Password' />
                        <button className='w-full text-white text-xl py-3 bg-[#C11119] hover:opacity-90'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                    </form>
                    <div className='text-lg font-semibold flex gap-2 mt-6'>
                        <p className='text-gray-400'>{isSignInForm ? 'New to Netflix?' : 'Already have an account?'}</p>
                        <button onClick={handleForm} className='text-white hover:underline'>{isSignInForm ? 'Sign up now' : 'Sign In'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;