const Wrapper = ({ children }) => {
    return (  
        <div className="w-full h-screen flex flex-col justify-center items-center bg-white scroll-smooth landscape:h-max landscape:py-10
        md:landscape:h-screen md:bg-lightGray">
            {children}
        </div>
    );
}
 
export default Wrapper;