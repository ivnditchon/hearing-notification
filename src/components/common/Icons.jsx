const Icons = ({ Icon, inline }) => {
    return (  
        <>
            <Icon className={
                `h-6 object-contain
                ${inline ? 'stroke-darkGreen' : 'fill-darkGreen'}`} 
            />
        </>
    );
}
 
export default Icons;