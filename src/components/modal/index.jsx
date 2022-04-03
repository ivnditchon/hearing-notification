import Wrapper from './Wrapper'
import ModalBox from './ModalBox';
import MainText from './MainText';
import Button from '../UI/Button'
import Topbar from './Topbar';
import Icons from '../UI/Icons';
import { CheckIcon } from '@heroicons/react/outline'
import IconWrapper from './IconWrapper';

const Modal = () => {
    return (  
        <>
            <Wrapper>
                <ModalBox>
                    <Topbar>
                        <IconWrapper>
                            <Icons  
                                Icon={CheckIcon} 
                                modalIconBG
                            />
                        </IconWrapper>
                    </Topbar>
                    <MainText />
                    <Button 
                        hasMarginTop
                        title='OK'
                        defaultStyle
                        defaultBG
                    />
                </ModalBox>
            </Wrapper>
        </>
    );
}
 
export default Modal;