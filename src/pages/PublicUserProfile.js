import Button from "src/components/Button";
import Circle from "src/components/Circle";
import Label from "src/components/Label";
import Labeled from "src/components/Labeled";
import Column from "src/components/layout/Column";
import HorizontalSpacer from "src/components/layout/HorizontalSpacer";
import Row from "src/components/layout/Row";
import VerticalSpacer from "src/components/layout/VerticalSpacer";
import Panel from "src/components/Panel";
import { ReactComponent as StarIcon } from 'src/icons/grade.svg' 

export default function PublicUserProfile() {
    return (
        <Row margin='40px'>
        {/* Profile */}
            <Panel flex='0.2'>  
            <UserProfile 
                user='AlexDart' 
                country='Ireland' 
                joined='20th March 2020' 
                active='29th January 2024'
            />
            </Panel>

        {/* Feedback */}
        <Column>
            <FeedbackPanel title="Customer Feedback"/>
            <FeedbackPanel title="Seller Feedback"/>
            <FeedbackPanel title="Trader Feedback"/>
        </Column>
        </Row>
    )
}

function UserProfile(props) {
    return (
        <Column alignItems='center' margin='12px'>

            {/* Avatar */}
                <Circle margin='8px' size='64px' radius='128px'></Circle>

            {/* Details */}
            <Label><u>Name</u></Label>
            <Label color='white' fontSize='26px'>{props.user}</Label>

            <Label><u>Location</u></Label>
            <Label color='white' fontSize='26px'>{props.country}</Label>

            <Label><u>Joined</u></Label>
            <Label color='white' fontSize='26px'>{props.joined}</Label>

            <Label><u>Last Active</u></Label>
            <Label color='white' fontSize='26px'>{props.active}</Label>

            <HorizontalSpacer></HorizontalSpacer>
            <Button width='60%' height='10%'><b>Send Message</b></Button>
            <br></br>
        </Column>
    )
}

function FeedbackPanel(props) {
    return (
        <Panel>    
            {/* Feedback Header */}
            <Panel margin='4px' borderRadius='0px' borderWidth='8px' borderColor='orange' borderStyle='none none solid'>
            <Row margin='8px'>
                <Label>{props.title}</Label>
                <VerticalSpacer></VerticalSpacer>
                <VerticalSpacer></VerticalSpacer>
                <Stars/>
            </Row>
        </Panel>

            {/* Feedback List */}
                <Column maxHeight='160px' overflow='hidden' overflowY='scroll'>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                    <Feedback user='JackK' feedback='Perfect. No Problems. A++'/>
                </Column>
            </Panel>
    )
};

function Feedback(props) {
    return (
        <Panel margin='0px' backgroundColor='transparent' borderRadius='0px' borderColor='orange' borderStyle='none none solid'>
        <Row margin='4px 12px 0px 12px'>
            <Label>@{props.user}</Label>
            <VerticalSpacer></VerticalSpacer>
            <Label>{props.feedback}</Label>
            <VerticalSpacer></VerticalSpacer>
            <Stars/>
        </Row>
        </Panel>
    )
};

function Stars() {
    return (
        <Row flex='0.3' alignItems='center'>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
        </Row>
    )
};