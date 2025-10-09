import image from '../Images/Banner.png'

export default function HeaderImage(){
    return(
      <div
        className="w-full bg-cover min-h-100 bg-center py-20"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    )
}