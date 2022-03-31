import Icons from "./Icons";

const InputField = ({ type, name, id, labelTitle,  hasIcon, hasLabel, responsive }) => {
    return (  
        <div className={`relative w-full h-10 flex items-center border-b border-softGray ${responsive ? 'row-start-2 row-span-2' : ''}`}>
            {hasIcon && (
                <Icons Icon={hasIcon} setHeight='h-6' />
            )}
            <input type={type} name={name} id={id} className='w-full h-full px-1.5 outline-none text-sm text-darkGray' autoComplete="off" />
            {hasLabel && (
                <label htmlFor={id} className={`${hasIcon ? 'left-7' : 'left-1.5'} absolute top-1/2 transform -translate-y-1/2 text-sm text-softGray`}>{labelTitle}</label>
            )}
        </div>
    );
}
 
export default InputField;