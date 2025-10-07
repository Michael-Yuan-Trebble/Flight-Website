

export default function DownloadButton({darkMode}){
    return(
            <div className="relative group inline-block">
            <button
                disabled
                className="bg-gray-400 text-gray-200 px-4 py-2 rounded cursor-not-allowed transition duration-300"
            >
                Download
            </button>

            <div 
            className= "absolute bottom-full mb-2 left-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm rounded py-1 px-2 whitespace-nowrap"
            style={{backgroundColor: darkMode ? 'white' : 'black',
                color: darkMode ? 'black' : 'white'
            }}>
                Not available yet
            </div>
        </div>
    )
}