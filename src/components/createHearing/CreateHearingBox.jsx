const CreateHearingBox = ({ children }) => {
    return (  
        <div className='w-full h-max max-w-lg flex flex-col px-5 py-5 bg-white'>
            {children}
        </div>
    );
}
 
export default CreateHearingBox;