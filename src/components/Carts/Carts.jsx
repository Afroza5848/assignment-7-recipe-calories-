
import PropTypes from 'prop-types';


const Carts = ({cart}) => {
    return (
        <div className=" border border-gray-300 rounded-2xl p-6">
            <div>
                <h2 className="text-2xl font-bold text-center mb-4">Want to cook: {cart.length}</h2>
                <hr  className=" w-2/4 mx-auto"/>

                <div className="overflow-x-auto mt-4">
                    <table className="table">
                    
                        <thead>
                        <tr className="text-center text-xl">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody className=' '>

                            {
                                cart.map((c,idx) => (
                                   
                                        <tr key={idx} className="bg-base-200 text-center">
                                            <th>{idx + 1}</th>
                                            <td>{c.recipe_name}</td>
                                            <td>{c.preparing_time} minutes</td>
                                            <td>{c.calories} Calories</td>
                                            <button className="px-4 py-2 my-1 bg-green-500 rounded-full text-white">preparing</button>
                                    
                                        </tr>
                                ))
                            }
                    
                       
                        </tbody>
                    </table>
                    </div>
            </div>


            <div className=" mt-10">
                <h2 className="text-2xl font-bold text-center mb-4">Currently cooking: 02</h2>
                <hr  className=" w-2/4 mx-auto"/>

                <div className="overflow-x-auto mt-4">
                    <table className="table">
                    
                        <thead>
                        <tr className=" text-center text-xl">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                    
                       
                        <tr className="bg-base-200 text-center">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </div>
        </div>
    );
};

Carts.propTypes = {
    cart:PropTypes.array
};

export default Carts;