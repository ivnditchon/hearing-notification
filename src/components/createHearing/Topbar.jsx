const Topbar = () => {
    return (  
        <div className='flex justify-between items-start xs:items-center'>
            <h1 className='text-xl text-darkGray font-semibold antialiased tracking-wide mr-2'>Create hearing schedule</h1>
            <p className='text-sm text-softGray antialiased'>Cancel</p>
        </div>
    );
}
 
export default Topbar;