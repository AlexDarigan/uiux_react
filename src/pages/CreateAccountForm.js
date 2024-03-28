import { ReactComponent as MailIcon } from 'src/icons/mail.svg'
import Labeled from 'src/components/Labeled'
import TextInput from 'src/components/TextInput'
import Row from 'src/components/layout/Row'
import Circle from 'src/components/Circle'
import Column from 'src/components/layout/Column'
import Panel from 'src/components/Panel'
import Button from 'src/components/Button'

export default function CreateAccountForm() {
    return (
      <Panel alignSelf='center' alignContent='center' margin='42px'>
        <Column margin='16px' alignItems='center'>
          <Labeled label="Display Name">
            <Row alignItems='center'>
              <Circle>
                <MailIcon style={{alignSelf: 'start', marginBottom: '20px', marginLeft: '-4px'}}/>
              </Circle>
              <TextInput></TextInput>
            </Row>
          </Labeled>

          <br></br>
          
          <Labeled label="Email">
            <Row alignItems='center'>
              <Circle>
                <MailIcon style={{alignSelf: 'start', marginBottom: '20px', marginLeft: '-4px'}}/>
              </Circle>
              <TextInput></TextInput>
            </Row>
          </Labeled>
          
          <br></br>
          
          <Labeled label="Password">
            <Row alignItems='center'>
              <Circle>
                <MailIcon style={{alignSelf: 'start', marginBottom: '20px', marginLeft: '-4px'}}/>
              </Circle>
              <TextInput></TextInput>
            </Row>
          </Labeled>
          
          <br></br>
          
          <Labeled label="Confirm Password">
            <Row alignItems='center'>
              <Circle>
                <MailIcon style={{alignSelf: 'start', marginBottom: '20px', marginLeft: '-4px'}}/>
              </Circle>
              <TextInput></TextInput>
            </Row>
          </Labeled>

          <br></br>
          <br></br>
          <br></br>

          <Button width='60%'>Create Account</Button>
        </Column>
        <br></br>
      </Panel>
    )
  }