const Wrapper = ({ children }) => {
    return (  
        <div className='w-full h-max flex justify-center items-center rounded-sm xl:bg-lightGray xl:py-10'>
            {children}
        </div>
    );
}
 
export default Wrapper;