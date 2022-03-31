import Wrapper from './Wrapper';
import CreateHearingBox from './CreateHearingBox';
import Topbar from './Topbar';
import Form from '../common/Form';
import InputFieldWrapper from '../common/InputFieldWrapper';
import InputField from '../common/InputField';
import Button from '../common/Button';
import Dropdown from '../common/Dropdown';

const CreateHearing = () => {
    /** Lawyers list */
    const LAWYERS_DETAILS = [
        { 
            firstName: 'Ronald Hallid',
            middleName: 'Dimacisil',
            lastName: 'Torres',
        },
        { 
            firstName: 'Mohajiroe',
            middleName: 'Mohammad',
            lastName: 'Lauban'
        },
        { 
            firstName: 'Almaizer',
            middleName: 'Sarigan',
            lastName: 'Ampa', 
        },
        { 
            firstName: 'Lady Shahanie',
            middleName: 'Ampatuan',
            lastName: 'Angas',
        },
    ];

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
                                hasLabel
                                labelTitle='Date'
                            />
                            <InputField 
                                type='text'
                                name='time'
                                id='time'
                                hasLabel
                                labelTitle='Time'
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
                                name='contact-number'
                                id='contact-number'
                                hasLabel
                                labelTitle='Contact number'
                            />
                            <InputField 
                                type='text'
                                name='email-address'
                                id='email-address'
                                hasLabel
                                labelTitle='Email address (optional)'
                            />
                        </InputFieldWrapper>
                        {/** Assigned lawyer container */}
                        <InputFieldWrapper
                            hasTitle='Assigned lawyer:'
                            hasGap
                            hasMargin
                        >
                            <Dropdown 
                                lawyerList={LAWYERS_DETAILS}
                                defaultStyle
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
                                hasLabel
                                labelTitle='Case number'
                            />
                            <InputField 
                                type='text'
                                name='case-title'
                                id='case-title'
                                hasLabel
                                labelTitle='Case title'
                            />
                            <InputField 
                                type='text'
                                name='case-type'
                                id='case-type'
                                hasLabel
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
                                hasLabel
                                labelTitle='Court name'
                            />
                            <InputField 
                                type='text'
                                name='court-city'
                                id='case-city'
                                hasLabel
                                labelTitle='City'
                            />
                            <InputField 
                                type='text'
                                name='court-street'
                                id='court-street'
                                hasLabel
                                labelTitle='Street'
                            />
                            <InputField 
                                type='text'
                                name='court-barangay'
                                id='court-barangay'
                                hasLabel
                                labelTitle='Barangay'
                            />
                            <InputField 
                                type='text'
                                name='court-province'
                                id='court-province'
                                hasLabel
                                labelTitle='Province'
                            />
                            <InputField 
                                type='text'
                                name='court-zip'
                                id='court-zip'
                                hasLabel
                                labelTitle='Zip'
                            />
                            <InputField 
                                type='text'
                                name='court-country'
                                id='court-country'
                                hasLabel
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