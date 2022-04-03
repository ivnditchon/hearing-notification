const LoginBox = ({ children }) => {
    return (  
        <div className='w-full h-max flex justify-center items-center rounded-sm md:w-auto md:bg-white md:px-10 md:py-10 xl:gap-x-8'>
            {children}
        </div>
    );
}
 
export default LoginBox;