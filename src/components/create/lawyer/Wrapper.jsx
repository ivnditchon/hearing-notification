const Wrapper = ({ children }) => {
    return (  
        <div className='w-full h-screen flex justify-center items-start rounded-sm overflow-scroll no-scrollbar md:bg-darkGray md:bg-opacity-50 md:items-center'>
            {children}
        </div>
    );
}
 
export default Wrapper;