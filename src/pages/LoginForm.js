import Column from 'src/components/layout/Column'
import Panel from 'src/components/Panel'
import Button from 'src/components/Button'
import { ReactComponent as MailIcon } from 'src/icons/mail.svg'
import Labeled from 'src/components/Labeled'
import Row from 'src/components/layout/Row'
import TextInput from 'src/components/TextInput'
import Circle from 'src/components/Circle'

export default function LoginForm() {
    return (
        <Panel alignSelf='center' margin='42px' alignContent='center'>
        <Column margin='16px'>
          <Labeled label="Email">
            <Row>
              <Circle >
                <MailIcon style={{alignSelf: 'start', marginBottom: '20px', marginLeft: '-4px'}}/>
              </Circle>
              <TextInput></TextInput>
            </Row>
          </Labeled>
          
          <br></br>

          <Labeled label='Password'>
            <Row>
              <Circle>
                <MailIcon style={{alignSelf: 'start', marginBottom: '20px', marginLeft: '-4px'}}/>
              </Circle>
              <TextInput></TextInput>
            </Row>
          </Labeled>
          
          <br/><br/><br/>
          
          <Column alignItems='center'>
            <Button width='60%' marginBottom='16px'>Login</Button>
            <Button width='60%' marginBottom='16px'>Create Account</Button>
            <Button width='60%' marginBottom='16px'>Forgot Password</Button>
          </Column>
        <br></br>
        </Column>
        </Panel>
    )
  }


