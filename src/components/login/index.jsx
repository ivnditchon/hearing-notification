import Wrapper from './Wrapper';
import LoginBox from './LoginBox';
import Logo from '../UI/Logo';
import MainText from './MainText';
import Button from '../UI/Button';
import Form from '../UI/Form';
import InputFieldWrapper from '../UI/InputFieldWrapper';
import InputField from '../UI/InputField';
import { UserIcon, LockClosedIcon } from '@heroicons/react/solid';
import LoginWrapper from './LoginWrapper';
import Hero from '../UI/Hero';

const Login = () => {
    return (  
        <>
            <Wrapper>
                <LoginBox>
                    <LoginWrapper>
                        <Logo setLogoStyle='h-16' />
                        <MainText />
                        <Form>
                            <InputFieldWrapper>
                                <InputField 
                                    type='text'
                                    name='username'
                                    id='username'
                                    hasLabel
                                    labelTitle='Username'
                                    hasIcon={UserIcon}
                                />
                            </InputFieldWrapper>
                            <InputFieldWrapper>
                                <InputField 
                                    type='password'
                                    name='password'
                                    hasLabel
                                    labelTitle='Password'
                                    hasIcon={LockClosedIcon}
                                />
                            </InputFieldWrapper>
                            <Button 
                                fullWidth 
                                title='LOGIN' 
                                defaultBG 
                                hasMarginTop
                                defaultStyle 
                            />
                        </Form>
                    </LoginWrapper>
                    <Hero />
                </LoginBox>
            </Wrapper>
        </>
    );
}
 
export default Login;