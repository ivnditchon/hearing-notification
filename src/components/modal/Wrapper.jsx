const Wrapper = ({ children }) => {
    return (  
        <div className='absolute inset-0 flex justify-center items-center w-full h-screen px-5 bg-darkGray bg-opacity-50'>
            {children}
        </div>
    );
}
 
export default Wrapper;