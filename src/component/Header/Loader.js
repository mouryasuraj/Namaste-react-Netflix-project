
import loadingImg from '../../assets/giphy.gif'

const Loader = () => {


    return (
        <div>
            <div className='fixed w-screen h-screen flex items-center justify-center bg-black opacity-50 z-[100]'>
                <img className='md:w-[70px] w-[60px] rounded-[50%]' src={loadingImg} alt="" />
            </div>
        </div>
    )
}

export default Loader
