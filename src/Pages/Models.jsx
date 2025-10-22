import {useState} from 'react'
import Header from '../Components/Header'
import HeaderImage from '../Components/HeaderImage'

export default function Models({darkMode}){
    const [selectedModel, setSelectedModel] = useState(null);

    const images = import.meta.glob('../ModelImages/*.png',{eager: true});

    const models = Object.entries(images).map(([path,module])=>{
        return {
            image: module.default,
        };
    });

    return(
        <div>
            <Header darkMode={darkMode}/>
            <HeaderImage/>
            
            <div className='flex flex-col min-h-screen pt-20 px-4 sm:px-8 md:px-16'>
                <div className='text-[20px] font-bold pb-10'>
                    Models
                </div>

                <div className='pb-10'>
                    Models are created in Blender
                </div>

                <div className={`w-full h-175 overflow-y-auto p-4 rounded-lg shadow-inner transition-colors duration-300 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[10rem]
                ${darkMode ? "bg-gray-800" : " bg-gray-300"}
                ${darkMode ? "border-2 border-gray-50" : "border-2 border-gray-600"}`}>
                {models.map((m, i) => (
                    <button
                    key={i}
                    onClick={() => setSelectedModel(m)}
                    className="relative group rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={m.image}
                            className="w-full h-40 object-cover"
                        />
                        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">{m.name}</span>
                        </div>
                    </button>
                ))}
                </div>

                {selectedModel && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedModel(null)}
                >
                    <div
                    className="max-w-3xl max-h-[80vh] overflow-hidden rounded-xl shadow-xl bg-white"
                    onClick={(e) => e.stopPropagation()}
                    >
                    <img
                        src={selectedModel.image}
                        className="w-full h-full object-contain"
                    />
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}