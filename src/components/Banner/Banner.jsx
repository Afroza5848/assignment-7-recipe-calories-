

const Banner = () => {
    return (
        <section className=" container mx-auto px-2">
            <div className="hero min-h-[70vh] rounded-2xl">
           
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:w-2/3">
                <h1 className="mb-8 lg:text-5xl text-3xl font-bold text-white leading-snug">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-8 lg:text-xl ">Discover amazing experiences with us. From breathtaking adventures to cozy retreats, we have something for everyone.</p>
                <div className=" lg:space-x-5 lg:space-y-0 space-y-5 items-center flex justify-center lg:flex-row flex-col">
                    <button className=" bg-green-500 text-white rounded-full lg:text-xl border-none lg:px-8 lg:py-4 px-5 py-3 border border-green-500">Explore Now</button>
                    <button className="text-white rounded-full lg:text-xl lg:px-8 lg:py-4 px-5 py-3 border border-white">Our Feedback</button>
                </div>
                </div>
            </div>
            </div>

        </section>
    );
};

export default Banner;