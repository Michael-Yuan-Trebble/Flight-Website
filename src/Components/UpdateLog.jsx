

export default function UpdateLog({darkMode,year,day,month, onClick, title}){
    return(

        <button
         onClick={onClick}
            className={`w-full text-left rounded shadow transition duration-300 p-4
                ${darkMode ? "bg-[#03061A] text-white hover:bg-gray-700" : "bg-white text-black hover:bg-gray-100"}
         `}>
            {year}.{month}.{day} | {title}
        </button>
    )
}