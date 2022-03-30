const CreateHearingBox = ({ children }) => {
    return (  
        <div className='w-full h-max flex flex-col px-8 py-8 bg-white max-w-lg'>
            {children}
        </div>
    );
}
 
export default CreateHearingBox;