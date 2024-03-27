import { ReactComponent as CartIcon } from 'src/icons/cart.svg'
import { ReactComponent as BackIcon } from 'src/icons/back.svg'
import Column from 'src/components/layout/Column'
import Row from 'src/components/layout/Row'
import Panel from 'src/components/Panel'
import HorizontalSpacer from 'src/components/layout/HorizontalSpacer'
import Labeled from 'src/components/Labeled'
import DropDownMenu from 'src/components/DropDownMenu'
import Button from 'src/components/Button'
import Label from 'src/components/Label'

export default function CheckoutPage() {
    return (
      <Row margin='40px'>
        <Inputs></Inputs>
        <vr style={{flex: .04}}></vr>
        <DetailsConfirmation></DetailsConfirmation>
      </Row>
    )
  }
  
  function Inputs() {
    return (
      <Panel>
        <Column alignItems='center'>
          <br></br><br></br>

          <Labeled label='Payments'>
            <Row alignItems='start'>
              <DropDownMenu/>
              <Button>Add New</Button>
            </Row>
          </Labeled>

          <Labeled label='Shipping Address'>
            <Row alignItems='start'>
              <DropDownMenu/>
              <Button>Add New</Button>
            </Row>
          </Labeled>
          
          <Labeled label='Billing Address'>
            <Row alignItems='start'>
              <DropDownMenu/>
              <Button>Add New</Button>
            </Row>
          </Labeled>
          
          <HorizontalSpacer></HorizontalSpacer>
          
          <Button width='200px' margin='16px'>
            <BackIcon></BackIcon>
            <CartIcon></CartIcon>
            Return To Cart
          </Button>
          
          <br></br>
        </Column>
      </Panel>
    )
  };

  function DetailsConfirmation() {
    return (
    <Column>
        <Column>
          <Detail label="Quantity" value="€20"/>
          <Detail label="Price" value="€200"/>
          <Detail label="Shipping" value="€40"/>
        </Column>
        <br></br>
        <ShippingAddress/>
        <br></br>
        <center><Button>Checkout</Button></center>
        <br></br>
      </Column>
    )
  };
  
  function ShippingAddress() {
    return (
      <Panel>
          <Column alignItems='start' margin='8px'>
            <Label>Shipping Address</Label>
            <br></br>
            <Label color='white'>Alex Dart</Label>
            <Label color='white'>SETU Carlow</Label>
            <Label color='white'>Kilkenny Road</Label>
            <Label color='white'>Carlow</Label>
            <Label color='white'>Ireland</Label>
            <Label color='white'>RXX YXX</Label>
          </Column>
        </Panel>
    )
  }
  
  function Detail({label, value}) {
    return (
      <Panel>
        <Row margin='6px'>
          <Label>{label}</Label>
          <div style={{flex: 1}}/>
          <Label>{value}</Label>
        </Row>
      </Panel>
  )
};