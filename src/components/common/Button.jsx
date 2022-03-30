import Icons from "./Icons";

const Button = ({ hasMarginTop, defaultStyle, defaultBG, title, hasIconLeft, hasIconRight }) => {
    return ( 
        <div className={`${hasMarginTop ? 'mt-8' : ''}`}>
            <button className={
                `h-max rounded-sm 
                ${defaultStyle ? 'w-full py-1.5 text-lg text-white font-bold tracking-wider' : ''} 
                ${defaultBG ? 'bg-gradient-to-r from-softGreen to-darkGreen' : 'bg-white border border-lightGray'}`
            }>
                {hasIconLeft && (
                    <Icons Icon={hasIconLeft} />
                )}
                {title}
                {hasIconRight && (
                    <Icons Icon={hasIconRight} />
                )}
            </button>
        </div>
    );
}
 
export default Button;