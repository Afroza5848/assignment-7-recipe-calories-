
//import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Carts from "../Carts/Carts";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cart,setCart] = useState([]);
    const [currentCart, setCurrentCart] = useState([]);
    const [totalTime,setTotalTime] = useState(0);
    const [totalCalories,setTotalCalories] = useState(0);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
   //console.log(cart)
// handle want to cook button
   const handleWantToCook = (recipe) => {
       const isExists =  cart.find(c => c.recipe_id === recipe.recipe_id);
       if(!isExists){
            const newRecipe = [...cart,recipe]
            setCart(newRecipe)
            toast.success("Successfully Added")
       }
       else{
        toast.error("Already Exists")
       }  
   }
// handle preparing button
   const handlePreparingBtn = (cart2) => {
       
        const removeCart = cart.filter(item => item.recipe_id !== cart2.recipe_id);
        setCart(removeCart);
        setCurrentCart([...currentCart,cart2]);
        setTotalTime(totalTime + cart2.preparing_time);
        setTotalCalories(totalCalories + cart2.calories);

   }
    return (
        <section className=" container mx-auto px-2 py-11">
            <div className="text-center w-2/3 mx-auto py-14">
                <h2 className=" text-5xl font-semibold text-[#150B2B] mb-5">Our Recipes</h2>
                <p className="text-xl text-[#150B2B99]">Welcome to our treasure trove of recipes, carefully curated to tantalize your taste buds and inspire your culinary adventures.  Get ready to embark on a delicious journey with us!</p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
                <div className=" col-span-2">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                       {
                        recipes.map((recipe,idx) => (
                            <Recipe key={idx} handleWantToCook={handleWantToCook} recipe={recipe}></Recipe>
                        ))
                       }
                    </div>
                </div>
                <div className=" col-span-2">
                    <Carts totalTime={totalTime} totalCalories={totalCalories} handlePreparingBtn={handlePreparingBtn} currentCart={currentCart} cart={cart}></Carts>
                </div>
            </div>
            <ToastContainer />        
        </section>
    );
};

Recipes.propTypes = {
    
};

export default Recipes;