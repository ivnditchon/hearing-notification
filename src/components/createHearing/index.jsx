import Wrapper from './Wrapper';
import CreateHearingBox from './CreateHearingBox';
import Topbar from './Topbar';
import Form from '../common/Form';
import InputFieldWrapper from '../common/InputFieldWrapper';
import InputField from '../common/InputField';
import Button from '../common/Button';

const CreateHearing = () => {
    return (  
        <>
            <Wrapper>
                <CreateHearingBox>
                    <Topbar />
                    <Form>
                        {/** Date and time container */}
                        <InputFieldWrapper
                            hasTitle='Date and time'
                            hasGap
                        >
                            <InputField 
                                type='text'
                                name='date'
                                id='date'
                                labelTitle='Date'
                            />
                            <InputField 
                                type='text'
                                name='time'
                                id='time'
                                labelTitle='Time'
                                responsive
                            />
                        </InputFieldWrapper>
                        {/** Client container */}
                        <InputFieldWrapper
                            hasTitle='Client details:'
                            hasGap
                            hasMargin
                        >
                            <InputField 
                                type='text'
                                name='first-name'
                                id='first-name'
                                labelTitle='Firstname'
                            />
                            <InputField 
                                type='text'
                                name='middle-name'
                                id='middle-name'
                                labelTitle='Middlename'
                            />
                            <InputField 
                                type='text'
                                name='last-name'
                                id='last-name'
                                labelTitle='Lastname'
                            />
                            <InputField 
                                type='text'
                                name='contact-number'
                                id='contact-number'
                                labelTitle='Contact number'
                            />
                            <InputField 
                                type='text'
                                name='email-address'
                                id='email-address'
                                labelTitle='Email address (optional)'
                            />
                        </InputFieldWrapper>
                        {/** Assigned lawyer container */}
                        <InputFieldWrapper
                            hasTitle='Assigned lawyer:'
                            hasGap
                            hasMargin
                        >
                            <InputField 
                                type='text'
                                id='assigned-lawyer'
                                name='assigned lawyer'
                                labelTitle='Assigned lawyer'
                            />
                        </InputFieldWrapper>
                        {/** Case container */}
                        <InputFieldWrapper
                            hasTitle='Case details:'
                            hasGap
                            hasMargin
                        >
                            <InputField 
                                type='text'
                                name='case-number'
                                id='case-number'
                                labelTitle='Case number'
                            />
                            <InputField 
                                type='text'
                                name='case-title'
                                id='case-title'
                                labelTitle='Case title'
                            />
                            <InputField 
                                type='text'
                                name='case-type'
                                id='case-type'
                                labelTitle='Case type'
                            />
                        </InputFieldWrapper>
                        {/** Court container */}
                        <InputFieldWrapper
                            hasTitle='Court details:'
                            hasGap
                            hasMargin
                        >
                            <InputField 
                                type='text'
                                name='court-name'
                                id='court-name'
                                labelTitle='Court name'
                            />
                            <InputField 
                                type='text'
                                name='court-city'
                                id='case-city'
                                labelTitle='City'
                            />
                            <InputField 
                                type='text'
                                name='court-street'
                                id='court-street'
                                labelTitle='Street'
                            />
                            <InputField 
                                type='text'
                                name='court-barangay'
                                id='court-barangay'
                                labelTitle='Barangay'
                            />
                            <InputField 
                                type='text'
                                name='court-province'
                                id='court-province'
                                labelTitle='Province'
                            />
                            <InputField 
                                type='text'
                                name='court-zip'
                                id='court-zip'
                                labelTitle='Zip'
                            />
                            <InputField 
                                type='text'
                                name='court-country'
                                id='court-country'
                                labelTitle='Country'
                            />
                        </InputFieldWrapper>
                        <Button 
                            fullWidth 
                            title='CREATE' 
                            defaultBG 
                            hasMarginTop
                            defaultStyle
                        />
                    </Form>
                </CreateHearingBox>
            </Wrapper>
        </>
    );
}
 
export default CreateHearing;