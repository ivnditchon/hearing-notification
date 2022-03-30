const LoginWrapper = ({ children }) => {
    return (  
        <div className='w-full h-max max-w-[18rem] flex flex-col items-center'>
            {children}
        </div>
    );
}
 
export default LoginWrapper;