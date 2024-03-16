
//import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
   // console.log(recipes)

    return (
        <section className=" container mx-auto px-2 py-11">
            <div className="text-center w-2/3 mx-auto py-14">
                <h2 className=" text-5xl font-semibold text-[#150B2B] mb-5">Our Recipes</h2>
                <p className="text-xl text-[#150B2BB9]">Welcome to our treasure trove of recipes, carefully curated to tantalize your taste buds and inspire your culinary adventures. Whether you are a seasoned chef or a novice in the kitchen, our collection offers something for everyone. Get ready to embark on a delicious journey with us!</p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
                <div className=" col-span-2">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                       {
                        recipes.map((recipe) => (
                            <Recipe key={recipe.id} recipe={recipe}></Recipe>
                        ))
                       }
                    </div>
                </div>
                <div className=" col-span-2">
                    <Carts></Carts>
                </div>
            </div>

        </section>
    );
};

Recipes.propTypes = {
    
};

export default Recipes;