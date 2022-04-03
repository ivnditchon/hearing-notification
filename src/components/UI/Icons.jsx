const Icons = ({ Icon, defaultHeight, defaultInlineColor, defaultSolidColor }) => {
    return (  
        <>
            <Icon className={
                `${defaultHeight ? 'h-6' : 'h-16'} ${defaultInlineColor ? 'stroke-softGray' : 'stroke-white'} 
                ${defaultSolidColor ? 'fill-softGray' : 'fill-darkGreen'}
                object-contain xl:cursor-pointer`} 
            />
        </>
    );
}
 
export default Icons;