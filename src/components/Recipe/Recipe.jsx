
import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const {recipe_image,recipe_name,description,preparing_time,calories,ingredients} = recipe;
    return (
        <section>
            <div className="card bg-base-100 border border-gray-300 ">
            <figure className="px-6 pt-6">
                <img src={recipe_image} alt={recipe_image} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                <button className="btn bg-green-500 text-white rounded-full">Want To Cook</button>
                </div>
            </div>
            </div>
        </section>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object 
};

export default Recipe;