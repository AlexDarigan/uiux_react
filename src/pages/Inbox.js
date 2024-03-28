import Circle from "src/components/Circle";
import Label from "src/components/Label";
import Column from "src/components/layout/Column";
import HorizontalSpacer from "src/components/layout/HorizontalSpacer";
import Row from "src/components/layout/Row";
import VerticalSpacer from "src/components/layout/VerticalSpacer";
import Panel from "src/components/Panel";
import Box from "src/components/layout/Box";
import Button from "src/components/Button";
import TextInput from "src/components/TextInput";

export default function Inbox(props) {
    return (
        <Row margin='40px'>
            {/* Folders */}
            <Panel flex='0.4' borderColor='orange'>
                <Folder label='Inbox' count='20'/>
                <Folder label='Sent' count='10'/>
                <Folder label='Draft' count='1'/>
                <Folder label='Tickets' count='10'/>
            </Panel>

            {/* Messages */}
            <Panel flex='0.6' borderColor='orange' overflow='hidden' overflowY='scroll' maxHeight='800px'>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
                <Message title='Re: Offer' sender='@AlexDart' date='23rd March 2023'/>
            </Panel>

            <Panel flex='1' borderColor='orange' alignSelf='stretch' alignItems='start' maxHeight='none'>
                <Column margin='20px' flex='0.5' alignSelf='start'>
                        <Row flex='0.01' alignItems='center' margin='12px'>
                            <VerticalSpacer></VerticalSpacer>
                            <Button>Send</Button>
                            <Button>Forward</Button>
                            <Button>Attach</Button>
                            <Button>Save Draft</Button>
                            <Button>Delete</Button>
                            <VerticalSpacer></VerticalSpacer>
                        </Row>
                        <Row flex='0.01' alignItems='center' margin='12px'>
                            <Label>To</Label>
                            <VerticalSpacer></VerticalSpacer>
                            <TextInput width='80%'></TextInput>
                        </Row>
                        <Row flex='0.01' alignItems='center' margin='12px'>
                            <Label>Subject</Label>
                            <VerticalSpacer></VerticalSpacer>
                            <TextInput width='80%'></TextInput>
                        </Row>
                        <TextArea rows='20' width='100%' flex='.9' margin='8px 0px 0px -6px'/>
                    </Column>
            </Panel>
        </Row>
    )
};

function TextArea(props) {
    return (
        <textarea 
            rows={props.rows}
            style={{
                margin: props.margin,
                borderColor: 'orange',
                borderWidth: '4px',
                borderStyle: 'solid',
                borderRadius: '8px',
                width:props.width, 
                flex: props.flex
            }}>

            </textarea>
    )
};

function Folder(props) {
    return (
        <Panel borderColor='orange' boxShadow='4px 4px 4px' margin='20px'>
            <Row margin='12px'>
                <Label>{props.label}</Label>
                <VerticalSpacer/>
                <Label>{props.count}</Label>
            </Row>
        </Panel>
    )
};

function Message(props) {
    return (
        <Panel borderColor='orange' margin='20px'>
            <Row alignItems='center'>
                <Circle margin='8px' size='24px' radius='48px'></Circle>
                <Column flex='2'>
                        <Label><u>{props.title}</u></Label>
                        <Label color='white'>{props.sender}</Label>
                    <Row>
                        <VerticalSpacer></VerticalSpacer>
                        <Label fontSize='24px' marginRight='16px'>{props.date}</Label>
                    </Row>
                </Column>
            </Row>
        </Panel>
    )
};

function ComposeMessage() {
    return (
        <Column>

            {/* Options */}
            <Panel>
                <Column>
                    <Row>
                        <Button >Send</Button>
                        <Button>Forward</Button>
                        <Button>Attach</Button>
                        <Button>Save Draft</Button>
                        <Button>Delete</Button>
                    </Row>
                    <HorizontalSpacer></HorizontalSpacer>
                    <Row alignItems='center'>
                        <Label>To</Label>
                        <TextInput></TextInput>
                    </Row>
                    <Row alignItems='center'>
                        <Label>Subject</Label>
                        <TextInput></TextInput>
                    </Row>
                </Column>
            </Panel>

            {/* Text */}
            <TextInput flex='1'></TextInput>
        </Column>
    )
}