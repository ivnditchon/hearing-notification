import Wrapper from './Wrapper';
import CreateHearingBox from './CreateHearingBox';
import Topbar from './Topbar';
import Form from '../common/Form';
import InputFieldMainWrapper from '../common/InputFieldMainWrapper';
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
                        <InputFieldMainWrapper
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
                            />
                        </InputFieldMainWrapper>
                        {/** Client container */}
                        <InputFieldMainWrapper
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
                        </InputFieldMainWrapper>
                        {/** Assigned lawyer container */}
                        <InputFieldMainWrapper
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
                        </InputFieldMainWrapper>
                        {/** Case container */}
                        <InputFieldMainWrapper
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
                        </InputFieldMainWrapper>
                        {/** Court container */}
                        <InputFieldMainWrapper
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
                        </InputFieldMainWrapper>
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