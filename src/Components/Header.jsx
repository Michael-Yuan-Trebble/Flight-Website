import {Link} from "react-router-dom"

export default function Header({darkMode}){
    const pages = [
        {name:"Home",path: "/"}, 
        {name:"Updates",path:"/Updates"},
        {name:"Models",path:"/Models"},
    ];
    return(
        <nav className = "flex justify-between items-center px-10 pb-20 text-[20px]" style={{
            backgroundColor: darkMode ? 'black' : 'white'
        }}>
            <span className="font-semibold"
            style={{color: darkMode ? "white" : "black"}}>
                Flight Simulator
            </span>
            <div className="flex text-right space-x-4">
            {pages.map((link)=> (
                <Link key={link.path} to={link.path} className=" hover:text-blue-500 rounded-[5px]"
                style={{    backgroundColor: darkMode ? '#03061A' : 'white',
                            color: darkMode ? 'white' : 'black',}}>
                    {link.name}
                </Link>
            ))}
            </div>
        </nav>
    )
}