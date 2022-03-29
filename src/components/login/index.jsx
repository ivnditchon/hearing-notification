import Wrapper from './Wrapper';
import LoginBox from './LoginBox';
import Logo from '../common/Logo';
import MainText from './MainText';
import Button from '../common/Button';
import Form from '../common/Form';
import InputFieldMainWrapper from '../common/InputFieldMainWrapper';
import InputFieldWrapper from '../common/InputFieldWrapper';
import InputField from '../common/InputField';
import { UserIcon, LockClosedIcon } from '@heroicons/react/solid';

const Login = () => {
    return (  
        <>
            <Wrapper>
                <LoginBox>
                    <Logo setLogoStyle='h-16' />
                    <MainText />
                    <Form>
                        <InputFieldMainWrapper>
                            <InputFieldWrapper>
                                <InputField 
                                    type='text'
                                    name='username'
                                    id='username'
                                    labelTitle='Username'
                                    hasIcon={UserIcon}
                                />
                            </InputFieldWrapper>
                        </InputFieldMainWrapper>
                        <InputFieldMainWrapper>
                            <InputFieldWrapper>
                                <InputField 
                                    type='password'
                                    name='password'
                                    labelTitle='Password'
                                    hasIcon={LockClosedIcon}
                                />
                            </InputFieldWrapper>
                        </InputFieldMainWrapper>
                        <Button 
                            fullWidth 
                            title='LOGIN' 
                            defaultBG setWrapperStyle='mt-5' 
                            setButtonStyle='py-1.5 text-lg text-white font-bold tracking-wider' 
                        />
                    </Form>
                </LoginBox>
            </Wrapper>
        </>
    );
}
 
export default Login;