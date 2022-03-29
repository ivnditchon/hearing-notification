const InputFieldMainWrapper = ({ hasTitle, children }) => {
    return (  
        <div className='w-full h-max grid grid-cols-1'>
            {hasTitle && (
                <h1>{hasTitle}</h1>
            )}
            {children}
        </div>
    );
}
 
export default InputFieldMainWrapper;