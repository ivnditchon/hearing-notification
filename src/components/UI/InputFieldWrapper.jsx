const InputFieldMainWrapper = ({ hasTitle, children, hasGap }) => {
    return (  
        <div className={`w-full h-max grid grid-cols-1 ${hasGap ? 'gap-y-6' : ''}`}>
            {hasTitle && (
                <h1 className='text-base font-medium text-darkGray antialiased'>{hasTitle}</h1>
            )}
            {children}
        </div>
    );
}
 
export default InputFieldMainWrapper;