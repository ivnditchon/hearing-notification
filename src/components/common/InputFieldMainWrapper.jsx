const InputFieldMainWrapper = ({ hasTitle, children, hasGap, hasMargin }) => {
    return (  
        <div className={`w-full h-max grid grid-cols-1 ${hasGap ? 'gap-y-5' : ''} ${hasMargin ? 'mt-5' : ''} `}>
            {hasTitle && (
                <h1 className='text-base font-medium text-darkGray antialiased'>{hasTitle}</h1>
            )}
            {children}
        </div>
    );
}
 
export default InputFieldMainWrapper;