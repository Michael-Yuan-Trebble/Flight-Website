import {Link} from "react-router-dom"

export default function Header({darkMode}){
    const pages = [
        {name:"Home",path: "/"}, 
        {name:"Updates",path:"/Updates"},
        {name:"Models",path:"/Models"},
    ];
    return(
        <nav className = "flex flex-wrap justify-between items-center py-4 transition-colors duration-300 pb-10  px-4 sm:px-8 md:px-16" 
        style={{
            backgroundColor: darkMode ? '#03061A' : '#E8E8E8'
        }}>
            <span className="font-semibold text-lg sm:text-xl md:text-2xl transition-colors duration-300"
            style={{color: darkMode ? "white" : "black"}}>
                Flight Simulator
            </span>
            <div className="flex flex-wrap justify-end space-x-3 sm:space-x-6 mt-2 sm:mt-0 transition-colors duration-300">
            {pages.map((link)=> (
                <Link 
                key={link.path} 
                to={link.path} 
                className="text-[20px] font-semibold py- rounded-md hover:text-blue-500 transition-colors duration-300"
                style={{    
                    backgroundColor: darkMode ? '#03061A' : '#E8E8E8',
                    color: darkMode ? 'white' : 'black',}}>
                {link.name}
                </Link>
            ))}
            </div>
        </nav>
    )
}