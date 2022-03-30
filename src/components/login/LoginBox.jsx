const LoginBox = ({ children }) => {
    return (  
        <div className='w-full h-max flex justify-center items-center rounded-sm xl:w-auto xl:bg-white xl:px-10 xl:gap-x-8'>
            {children}
        </div>
    );
}
 
export default LoginBox;