import image from '../Images/Su-27.png'

export default function HeaderImage(){
    return(
        <div className='pl-65 pr-65 min-h-100 max-h-100 bg-cover bg-center'
        style ={{
            backgroundImage: `url(${image})`,
        }}
        ></div>
    )
}