import React from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'
const Recipes = () => {
  const recipes = [
    {
        title: "Vegetable porridge",
        image: "/images/Vegetable porridge.jpeg",
        authorImg: "chiefs/Chef Oggy.jpeg",
    }, 
    {
        title: "Jollof Rice, Plantain and Sauce",
        image: "Jollof Rice, plantain and sauce.jpeg",
        authorImg: "chiefs/Chef Danny.jpeg",
    },
    {
        title: "Amala and Ewedu",
        image: "Amala&Ewedu.jpeg",
        authorImg: "chiefs/Chef Joy.jpeg",
    },
    {
        title: "Appetizers",
        image: "Appetizers.jpeg",
        authorImg: "chiefs/Chef Chi.jpeg",
    },
    {
        title: "Plantain and Sauce",
        image: "Plantain&Sauce.jpeg",
        authorImg: "chiefs/Chef Nelly.jpeg",
    },
    {
        title: "Jollof Rice and Chicken",
        image: "All you can eat.jpeg",
        authorImg: "chiefs/Chef Nelly.jpeg",
    }, 
    {
        title: "Amala and Ewedu",
        image: "Amala&Ewedu.jpeg",
        authorImg: "chiefs/Chef Oggy.jpeg",
    },
    {
        title: "Puff puff",
        image: "Appetizers.jpeg",
        authorImg: "chiefs/Chef Joy.jpeg",
    },
    {
        title: "Eba and Egusi",
        image: "Eba&Egusi.jpeg",
        authorImg: "chiefs/Chef Danny.jpeg",
    },
    {
        title: "Munches",
        image: "munches.jpeg",
        authorImg: "chiefs/Chef Oggy.jpeg",
    },
    {
        title: "Ofada rice and Sauce",
        image: "Ofada rice.jpeg",
        authorImg: "chiefs/Chef Nelly.jpeg",
    },
    {
        title: "Plantain and Sauce",
        image: "Plantain&Sauce.jpeg",
        authorImg: "chiefs/Chef Chi.jpeg",
    }
].sort(() => Math.random() - 0.5)

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) =>
        <RecipeCard key={index} recipe={recipe}/>
        )}
      
      
      </div>
    </div>
  )
}

export default Recipes