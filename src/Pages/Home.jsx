import Header from '../Components/Header'
import HeaderImage from '../Components/HeaderImage'
import ReactMarkdown from 'react-markdown'
import HomeMd from '../Text/Home.md?raw'

//pl-10 pr-10 pt-30

export default function Home({darkMode}){
    return(
        <div>
            <Header darkMode={darkMode}/>
            <HeaderImage/>
            <div className='flex min-h-screen pt-20'>
                <div className='w-1/2 pl-15 pr-15'>
                    <ReactMarkdown>{HomeMd}</ReactMarkdown>
                </div>
                <div className='w-1/2 pl-15 pr-15'>
                    HIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                </div>
            </div>
        </div>
    )
}