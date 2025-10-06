import Header from '../Components/Header'
import HeaderImage from '../Components/HeaderImage'

export default function Models({darkMode}){
    return(
        <div>
            <Header darkMode={darkMode}/>
            <HeaderImage/>
            <div className='pl-10 pr-10 pt-30 min-h-screen'>
                Models
            </div>
        </div>
    )
}