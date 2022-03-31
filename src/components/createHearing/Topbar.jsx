const Topbar = () => {
    return (  
        <div className='flex justify-between items-start md:items-center'>
            <h1 className='text-2xl text-darkGray font-bold antialiased tracking-wide'>Create hearing schedule</h1>
            <p className='text-sm text-softGray antialiased cursor-pointer'>Cancel</p>
        </div>
    );
}
 
export default Topbar;