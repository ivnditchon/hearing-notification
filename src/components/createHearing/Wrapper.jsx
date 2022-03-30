const Wrapper = ({ children }) => {
    return (  
        <div className='w-full h-max bg-lightGray'>
            {children}
        </div>
    );
}
 
export default Wrapper;