import Header from '../Components/Header'
import HeaderImage from '../Components/HeaderImage'

export default function Models({darkMode}){
    return(
        <div>
            <Header darkMode={darkMode}/>
            <HeaderImage/>
            <div className='flex min-h-screen pt-20 px-4 sm:px-8 md:px-16'>
                <div className='text-[20px] font-bold'>
                    Models
                </div>
            </div>
        </div>
    )
}