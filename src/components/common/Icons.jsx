const Icons = ({ Icon, setHeight, inline }) => {
    return (  
        <>
            <Icon className={
                `object-contain
                ${setHeight} ${inline ? 'stroke-darkGreen' : 'fill-darkGreen'}`} 
            />
        </>
    );
}
 
export default Icons;