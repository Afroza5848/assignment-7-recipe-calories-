
import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe,handleWantToCook}) => {
    const {recipe_image,recipe_name,description,preparing_time,calories,ingredients} = recipe;
    return (
        <section>
            <div className="card bg-base-100 border border-gray-300 ">
            <figure className="px-6 pt-6">
                <img src={recipe_image} alt={recipe_image} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p className='mb-2 text-[#282828B9]'>{description}</p>
                <hr />
                {/* ingredients */}
                <div className=' mt-2 mb-2'>
                    <h2 className=' text-xl text-[#282828B3] font-semibold'>Ingredients: {ingredients.length}</h2>
                    {
                        ingredients.map((ingredient,idx) => {
                           return <li className=' text-[#2828284D] font-normal py-1' key={idx}>{ingredient}</li>
                        })
                    }
                </div>
                <hr />

                {/* time */}
                <div className='flex justify-between py-3 items-center'>
                    <p className='flex gap-2 justify-center items-center text-[#282828B9]'><CiClock2 /> {preparing_time} minutes</p>
                    <p className='flex gap-2 justify-center items-center text-[#282828B9]'><AiOutlineFire /> {calories} Calories</p>
                </div>


                <div className="card-actions">
                <button onClick={()=>handleWantToCook(recipe)} className="btn bg-green-500 text-white rounded-full">Want To Cook</button>
                </div>
            </div>
            </div>
        </section>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object,
    handleWantToCook:PropTypes.func 
};

export default Recipe;