import Header from '../Components/Header'
import ReactMarkdown from 'react-markdown'
import HomeMd from '../Text/Home.md?raw'

export default function Home({darkMode}){
    return(
        <div>
            <Header darkMode={darkMode}/>
            <div className='pl-10'>
                <ReactMarkdown>{HomeMd}</ReactMarkdown>
            </div>
        </div>
    )
}