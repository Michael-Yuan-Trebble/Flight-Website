import Header from '../Components/Header'
import HeaderImage from '../Components/HeaderImage'
import Image from '../Components/Image'
import DownloadButton from '../Components/DownloadButton'
import ReactMarkdown from 'react-markdown'
import DescriptionMd from '../Text/Description.md?raw'
import FutureAdditionsMd from '../Text/FutureAdditions.md?raw'
import MissileGif from '../Images/Missile.gif'
import ShootGif from '../Images/Shoot.gif'

export default function Home({darkMode}){
    const media = [{image: MissileGif, caption: "Missile Firing"},
        {image: ShootGif, caption: "Shooting"}
    ]

    return(
        <div>
            <Header darkMode={darkMode}/>
            <HeaderImage/>

            <div className='flex min-h-screen pt-20 px-4 sm:px-8 md:px-16'>
                <div className='w-2/3'>
                    <h3 className="text-[20px] font-bold pb-10">
                        Flight Simulator Prototype
                    </h3>
                    <DownloadButton darkMode={darkMode}/>
                    
                    <div className="pt-10">
                        Download is currently not available.    
                    </div>

                    <div className='pt-10'>
                        <ReactMarkdown>
                            {DescriptionMd}
                        </ReactMarkdown>
                    </div>

                    <div className='pt-10'>
                        <ReactMarkdown>
                            {FutureAdditionsMd}
                        </ReactMarkdown>
                    </div>

                    <div className='pt-10'>
                        Updates goes to the major development updates and a github link to the repository for the source code.
                        Models goes to current models created, although not finalized.
                    </div>

                    <div className='pt-10'>
                        This project is built in Unreal Engine 5 and models are created with Blender.
                    </div>
                </div>

                <div className="w-1/3 pl-8 md:pl-16 flex flex-col items-end">
                    {media.map((group, i) => (
                        <Image key={i} Image={group.image} Caption={group.caption}/>
                    ))}

                </div>
            </div>
        </div>
    )
}