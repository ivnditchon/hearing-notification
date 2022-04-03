const Form = ({ children }) => {
    return (  
        <>
            <form action='#' className='w-full h-max grid grid-cols-1 gap-y-5 mt-8'>
                {children}
            </form>
        </>
    );
}
 
export default Form;