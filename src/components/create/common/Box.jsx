const Box = ({ children }) => {
    return (  
        <div className='w-full h-max flex flex-col px-10 py-10 bg-white max-w-lg'>
            {children}
        </div>
    );
}
 
export default Box;