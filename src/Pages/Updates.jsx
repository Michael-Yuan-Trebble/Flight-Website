import {useState} from 'react'
import Header from '../Components/Header'
import HeaderImage from '../Components/HeaderImage'
import UpdateLog from '../Components/UpdateLog'

export default function Updates({darkMode}){
    const [selectedUpdate, setSelectedUpdate] = useState(null);

    const updates = [
        {
            year:2025, month:10,day:6,title: 'Creation of Development Website', description: 'The website for centralizing progress and details was created'
        },
        {
            year:2025,month:4,day:14,title: 'Initial GitHub commit', description: 'The first GitHub commit for the source code for the project'
        },
        {
            year:2024,month:12,day:10,title: 'Start of the project', description: 'When the project was first started in Unreal Engine 5'
        },
        {
            year:2025, month:10,day:7,title: 'Created all sections of website', description: 'Website has all sections'
        }
    ]

    const sortedUpdates = [...updates].sort((a,b) => {
        const dateA = new Date(a.year, a.month - 1,a.day);
        const dateB = new Date(b.year, b.month - 1, b.day);
        return dateB - dateA;
    });

    return(
        <div>
            <Header darkMode={darkMode}/>
            <HeaderImage/>
            <div className='flex flex-col min-h-screen pt-20 px-4 sm:px-8 md:px-16'>
                <div className='text-[20px] font-bold pb-10'>
                    Updates
                </div>

                <div className='pb-10'>
                    Source code is located at this{" "}
                    <a href="https://github.com/Michael-Yuan-Trebble/UnrealEngineFlightProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 underline">
                        Github link
                    </a>
                </div>

                <div   className={`w-full h-175 overflow-y-auto p-4 rounded-lg shadow-inner transition-colors duration-300 space-y-4 
                    ${darkMode ? "bg-gray-800" : "bg-blue-100"}`}
                >
                    {sortedUpdates.map((u,i) => (
                        <UpdateLog
                            darkMode={darkMode}
                            key={i}
                            year={u.year}
                            month={u.month}
                            day={u.day}
                            title={u.title} 
                            onClick={() =>setSelectedUpdate(u)}
                        />
                    ))}

                {selectedUpdate && (
                    <div
                        className="fixed inset-0 bg-white/30 backdrop-blur-xs flex items-center justify-center z-50"
                        onClick={() => setSelectedUpdate(null)}
                        >
                        <div
                            className={`p-6 rounded-xl shadow-lg max-w-md text-center ${
                            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
                            }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-xl font-bold mb-4">{selectedUpdate.title}</h2>
                            <h1 classNam="mb-4">{selectedUpdate.description}</h1>
                            <p>{selectedUpdate.details}</p>
                            <button
                            onClick={() => setSelectedUpdate(null)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                            Close
                            </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}