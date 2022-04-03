import Icons from '../../UI/Icons';
import { XIcon } from '@heroicons/react/outline';

const Topbar = ({ title }) => {
    return (  
        <div className='relative w-full h-max flex justify-center items-end'>
            <h1 className='mt-16 text-3xl text-darkGray font-bold antialiased tracking-wide text-center'>{title}</h1>
            <div className='absolute right-0 top-0'>
                <Icons 
                    Icon={XIcon} 
                    defaultHeight
                    defaultInlineColor
                />
            </div> 
        </div>
    );
}
 
export default Topbar;