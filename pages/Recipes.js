

import PreviousSearches from "../components/PreviousSearches";
import RecipesCard from "../components/RecipesCard";

export default function Recipes(){
  const recipes = [
    {
      title: "Biriyani",
      image:  "/img/gallery/img6.jpg",
      authorImg:"/img/top-chief/chef2.jpg",
    },
    {
      title: "Pasta",
      image:  "/img/gallery/img4.jpg",
      authorImg:"/img/top-chief/chef1.jpg",
    },
    {
      title: "Burger",
      image:  "/img/gallery/img3.jpg",
      authorImg:"/img/top-chief/chef3.jpg",
    },
    {
      title: "Salad",
      image:  "/img/gallery/img2.jpg",
      authorImg:"/img/top-chief/chef5.jpg",
    },
    {
      title: "Rice_mandi",
      image:  "/img/gallery/img1.jpg",
      authorImg:"/img/top-chief/chef3.jpg",
    },
    {
      title: "Chicken",
      image:  "/img/gallery/img8.jpg",
      authorImg:"/img/top-chief/chef.jpg",
    },
  ].sort(() => Math.random() * 0.5 )

   
    return(
        <div>
          <PreviousSearches/>
          <div className="recipes-container">
            {/*<RecipesCard/>*/}
            {recipes.map((recipe, index) => (
              <RecipesCard key = {index} recipe = {recipe}/>
            ))}
          </div>
        </div>

    )
}