
import CustomImage from "./CustomImage"


export  default function HeroSection(){
    const images = [
        "/img/gallery/img1.jpg",
        "/img/gallery/img2.jpg",
        "/img/gallery/img3.jpg",
        "/img/gallery/img4.jpg",
        "/img/gallery/img5.jpg",
        "/img/gallery/img6.jpg",
        "/img/gallery/img7.jpg",
        "/img/gallery/img8.jpg",
        "/img/gallery/img9.jpg",
       
    ]
    return(
        <div className="section hero">
            <div className="col typography">
              <h1 className="title">what are we about</h1>
              <p className="info">FoodieHub is a place where you can please your soul and tammmy with delicious food receipes of all cuisine. And our servicee is absoluty free. SO start exploring now</p>
              <button className="btn" >explore now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index}  imgSrc ={src} pt={"90%"}/>
                ))}
               
              
            </div>
           
        </div>
    )
}