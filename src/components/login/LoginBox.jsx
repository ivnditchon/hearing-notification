const LoginBox = ({ children }) => {
    return (  
        <div className='w-full h-screen max-w-xs flex flex-col justify-center items-center px-8 py-8 bg-white'>
            {children}
        </div>
    );
}
 
export default LoginBox;