const InputFiledWrapper = ({ responsive, children }) => {
    return (  
        <div className={`${responsive} w-full h-max grid grid-cols-1`}>
            {children}
        </div>
    );
}
 
export default InputFiledWrapper;