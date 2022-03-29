import Icons from "./Icons";

const Button = ({ fullWidth, setWrapperStyle, setButtonStyle, defaultBG, title, hasIconLeft, hasIconRight, iconHeight }) => {
    return ( 
        <div className={
            `${fullWidth ? 'w-full': 'w-auto'} ${setWrapperStyle} h-max`
        }>
            <button className={
                `w-full h-max rounded-sm 
                ${setButtonStyle} 
                ${defaultBG ? 'bg-gradient-to-r from-softGreen to-darkGreen' : 'bg-white border border-lightGray'}`
            }>
                {hasIconLeft && (
                    <Icons Icon={hasIconLeft} setHeight={iconHeight} />
                )}
                {title}
                {hasIconRight && (
                    <Icons Icon={hasIconRight} setHeight={iconHeight} />
                )}
            </button>
        </div>
    );
}
 
export default Button;