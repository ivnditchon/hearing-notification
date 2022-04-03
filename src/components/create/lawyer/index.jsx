import Wrapper from './Wrapper';
import Box from '../common/Box';
import Topbar from '../common/Topbar';
import Form from '../../UI/Form';
import InputFieldMainWrapper from '../../UI/InputFieldWrapper';
import InputField from '../../UI/InputField';
import Button from '../../UI/Button';

const Lawyer = () => {
    return (  
        <>
            <Wrapper>
                <Box>
                    <Topbar 
                        title='Create lawyer details'
                    />
                    <Form>
                        <InputFieldMainWrapper
                            hasGap
                        >
                            <InputField 
                                type='text'
                                name='first-name'
                                id='first-name'
                                hasLabel
                                labelTitle='Firstname'
                            />
                            <InputField 
                                type='text'
                                name='middle-name'
                                id='middle-name'
                                hasLabel
                                labelTitle='Middlename'
                            />
                            <InputField 
                                type='text'
                                name='last-name'
                                id='last-name'
                                hasLabel
                                labelTitle='Lastname'
                            />
                            <InputField 
                                type='text'
                                name='email-address'
                                id='email-address'
                                hasLabel
                                labelTitle='Email address'
                            />
                            <InputField 
                                type='text'
                                name='mobile-number'
                                id='mobile-number'
                                hasLabel
                                labelTitle='Mobile number'
                            />
                        </InputFieldMainWrapper>
                        <Button 
                            fullWidth 
                            title='CREATE' 
                            defaultBG 
                            hasMarginTop
                            defaultStyle
                        />
                    </Form>
                </Box>
            </Wrapper>
        </>
    );
}
 
export default Lawyer;