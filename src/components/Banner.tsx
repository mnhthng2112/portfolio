const Banner = () => {
    return (
        <section className="relative">
            <img src="/hero-banner.png" className="w-full h-screen object-cover" alt="" />
            <div className="container h-full flex flex-col justify-center absolute inset-0">
                <div className="text-center text-white w-fit">
                    <h1 className="text-[72px] tenor-sans">Collection <br /> Fur Coat</h1>
                    <div>Use code BIGSALE50 on select sale styles</div>
                    <div className="flex items-center justify-center gap-6 mt-10">
                        <button className="rounded-[100px] px-7 py-4 bg-white text-black">
                            Load more
                        </button>
                        <div className="text-white underline underline-offset-8">New arrival</div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Banner;