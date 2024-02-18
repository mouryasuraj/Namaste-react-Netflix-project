import Header from './Header'
import { BG_IMAGE } from '../utils/constant';
import useLogin from '../hooks/useLogin'


const Login = () => {

    const { isSignInForm, errorMessage, name, email, password, form, handleForm, changeForm } = useLogin()

    return (
        <div style={{ backgroundImage: `url(${BG_IMAGE})`, }} className={`w-[100%] min-h-[150vh]  bg-cover relative]`}>
            <div className='bg-black w-full h-screen fixed md:bg-opacity-50'></div>
            {/* {loading && <Loader />} */}
            {/* Sign In Form */}
            <div className='absolute top-0 w-full'>
                <Header />
                <div className='sm:max-w-[500px] mx-auto sm:px-16 sm:py-12 px-5 mt-6 relative rounded-md bg-black bg-opacity-75'>
                    <h2 className='text-white sm:text-4xl text-2xl font-bold  my-5'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
                    <form onSubmit={handleForm} ref={form} className='flex flex-col'>
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