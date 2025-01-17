import { IoIosContact } from "react-icons/io";

const Header = () => {
    return (
        <header className=" container mx-auto py-10 px-2">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost flex lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                       
                        <li>
                            <label className="input input-bordered flex items-center rounded-full gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>   
                            <input type="text" className=" rounded-full" placeholder="Search" />
                            
                            </label>
                        </li>
                        
                    </ul>
                    </div>
                    <div className="avatar placeholder lg:hidden flex">
                            <div className=" bg-green-500 text-neutral-content rounded-full lg:w-10 w-9">
                                <span className="text-2xl"><IoIosContact /></span>
                            </div>
                        </div>
                    <a className="btn btn-ghost font-bold text-[#150B2B] lg:text-4xl text-2xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl ">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                        
                    </ul>
                </div>
               
                <div className="navbar-end lg:flex hidden    space-x-4">
                    
                    
                    <label className="input input-bordered flex justify-center items-center rounded-full gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    <input type="text" className="rounded-full" placeholder="Search" />
                    
                    </label>
                   
                    <div className="avatar placeholder ">
                        <div className=" bg-green-500 text-neutral-content rounded-full lg:w-14 w-9">
                            <span className="text-2xl"><IoIosContact /></span>
                        </div>
                    </div> 

                </div>
                </div>
        </header>
    );
};

export default Header;