import CustomImage from "./CustomImage"




export default function RecipesCard({recipe}){
    return(
        <div className= "recipes-card">
           <CustomImage imgSrc={recipe.image} pt="65%"/>
           <div className="recipes-card-info">
            <img className = "author-img" src={recipe.authorImg} alt=""/>
            <p className="recipe-title">{recipe.title}</p>
            <p className="recipes-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem</p>
            <a className = "view-btn" href="#!">VIEW RECIPE</a>
           
           </div>
        </div>
    )
}