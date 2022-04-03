const IconWrapper = ({ children }) => {
    return (  
        <div className='w-[70px] h-[70px] flex items-center justify-center rounded-full ring-4 ring-white'>
            {children}
        </div>
    );
}
 
export default IconWrapper;