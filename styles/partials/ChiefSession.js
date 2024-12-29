
import ChiefCard from "./chiefcart"


export default function ChiefSection(){
  const chiefs= [
    {
      name: "Johnson ",
      img: "/img/top-chief/chef1.jpg",
      recipesCount:"10",
      cuisine:"Mexican",
    },
    {
      name: "Jojo Goli ",
      img: "/img/top-chief/chef2.jpg",
      recipesCount:"10",
      cuisine:"Mexican",
    },
    {
      name: "Leroy ",
      img: "/img/top-chief/chef3.jpg",
      recipesCount:"10",
      cuisine:"Jponese",
    },
    {
      name: "Cice ",
      img: "/img/top-chief/chef4.jpg",
      recipesCount:"10",
      cuisine:"Indian",
    },
    {
      name: "Dorian ",
      img: "/img/top-chief/chef5.jpg",
      recipesCount:"10",
      cuisine:"African",
    },
    {
      name: "Dorian ",
      img: "/img/top-chief/chef.jpg",
      recipesCount:"10",
      cuisine:"African",
    }
  ]
    return(
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
          <div className="top-chiefs-container">
          {/*<ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>*/} 
          {chiefs.map(chief => <ChiefCard key = {chief.name} chief={chief}/>)}


          </div>
        </div>
    )
}