const LoginWrapper = ({ children }) => {
    return (  
        <div className="w-full h-screen flex justify-center items-center bg-lightGray">
            {children}
        </div>
    );
}
 
export default LoginWrapper;