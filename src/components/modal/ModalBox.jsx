const ModalBox = ({ children }) => {
    return (  
        <div className='relative w-full h-max px-5 py-5 bg-white rounded-sm max-w-xs min-w-fit'>
            {children}
        </div>
    );
}
 
export default ModalBox;