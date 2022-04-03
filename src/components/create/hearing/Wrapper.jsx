const Wrapper = ({ children }) => {
    return (  
        <div className='absolute top-0 left-0 w-full h-screen flex justify-center items-center rounded-sm md:bg-darkGray md:bg-opacity-80 xl:py-10 xl:px-10'>
            <div className='w-full h-full flex justify-center overflow-scroll no-scrollbar'>
                {children}
            </div>
        </div>
    );
}
 
export default Wrapper;