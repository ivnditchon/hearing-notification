const SuccessIconWrapper = ({ children }) => {
    return (  
        <div className='absolute top-0 left-0 w-full h-36 flex justify-center items-center bg-gradient-to-r from-softGreen to-darkGreen'>
            {children}
        </div>
    );
}
 
export default SuccessIconWrapper;