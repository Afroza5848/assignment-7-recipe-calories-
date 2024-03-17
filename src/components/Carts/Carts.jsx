
import PropTypes from 'prop-types';


const Carts = ({cart,handlePreparingBtn,currentCart,totalTime,totalCalories}) => {
   console.log(currentCart);
    return (
        <div className=" border border-gray-300 rounded-2xl  p-4">
            <div>
                <h2 className="text-2xl font-bold text-center mb-4">Want to cook: {cart.length}</h2>
                <hr  className=" w-2/4 mx-auto"/>

                <div className="overflow-x-auto mt-4">
                    <table className="table">
                    
                        <thead>
                        <tr className="text-xl">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody className=' space-y-2'>

                            {
                                cart.map((c,idx) => (
                                   
                                        <tr key={idx} className="bg-base-200">
                                            <th>{idx + 1}</th>
                                            <td>{c.recipe_name}</td>
                                            <td>{c.preparing_time} minutes</td>
                                            <td>{c.calories} Calories</td>
                                           <div className=''>
                                           <button onClick={()=>handlePreparingBtn(c)} className="px-4 py-2 bg-green-500 rounded-full text-white">preparing</button>
                                           </div>
                                            
                                    
                                        </tr>
                                ))
                            }
                    
                       
                        </tbody>
                    </table>
                    </div>
            </div>


            <div className=" mt-10">
                <h2 className="text-2xl font-bold text-center mb-4">Currently cooking: {currentCart.length}</h2>
                <hr  className=" w-2/4 mx-auto"/>

                <div className="overflow-x-auto mt-4">
                    <table className="table">
                    
                        <thead>
                        <tr className="text-xl">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                    
                       {
                        currentCart.map((c,idx) => {
                            return(
                            <tr key={idx} className="bg-base-200 ">
                                <th>{idx + 1}</th>
                                <td>{c.recipe_name}</td>
                                <td>{c.preparing_time} minutes</td>
                                <td>{c.calories} Calories</td>
                                
                            </tr>  
                            )
                        })
                       }

                       <tr>
                            <td></td>
                            <td></td>
                            <td><h2 className=' font-bold'>Total Times =</h2>{totalTime} minutes</td>
                            <td><h2 className=' font-bold'>Total Calories =</h2> {totalCalories} Calories</td>
                       </tr>
                        
                        </tbody>
                    </table>
                    </div>


            </div>
        </div>
    );
};

Carts.propTypes = {
    cart:PropTypes.array,
    handlePreparingBtn:PropTypes.func,
    currentCart:PropTypes.array,
    totalTime:PropTypes.number,
    totalCalories:PropTypes.number
};

export default Carts;