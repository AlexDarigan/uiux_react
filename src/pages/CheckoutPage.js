import { ReactComponent as CartIcon } from 'src/icons/cart.svg'
import { ReactComponent as BackIcon } from 'src/icons/back.svg'

export default function CheckoutPage() {
    return (
      <div id="Checkout" style={{
        flex: 1,
        margin: '40px',
        display: 'flex', flexDirection: 'row'
      }}>
        <Inputs></Inputs>
        <vr style={{flex: .04}}></vr>
        <DetailsConfirmation></DetailsConfirmation>
      </div>
    )
  }
  
  function Inputs() {
    return (
      <div id="Inputs" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'royalblue',
        border: '4px black solid',
        borderRadius: '16px',
        boxShadow: '2px 2px 2px'
      }}>
        <Input>Payments</Input>
        <Input>Shipping Address</Input>
        <Input>Billing Address</Input>
        <div style={{flex: 1}}/>
        <ReturnToCartButton></ReturnToCartButton>
        <br></br>
      </div>
    )
  };
  
  function AddNewButton() {
    return (
      <button style={{
        backgroundColor: 'orange',
        width: '120px',
        height: '31px',
        fontFamily: 'roboto',
        boxShadow: '2px 2px 0',
        borderRadius: '8px',
        marginLeft: '32px',
      }}>
        Add New
      </button>
    )
  }
  
  function CheckoutButton() {
    return (
      <button style={{
        backgroundColor: 'orange',
        width: '120px',
        height: '48px',
        fontFamily: 'roboto',
        boxShadow: '2px 2px 0',
        borderRadius: '8px',
        marginLeft: '32px',
      }}>
        Checkout
      </button>
    )
  }
  
  
  function ReturnToCartButton() {
    return (
      <button style={{
        backgroundColor: 'orange',
        height: '42px',
        fontFamily: 'roboto',
        boxShadow: '2px 2px 0',
        borderRadius: '8px',
      }}>
        {/* Derp */}
        <BackIcon/>
        <CartIcon/>
        <span style={{marginLeft: '16px', marginRight: '8px'}}>Return to Cart</span>
      </button>
    )
  }
  
  function Input({children}) {
    return (
      <div id="Input" style={{
        marginTop: '42px',
      }}>
        <InputLabel>{children}</InputLabel>
        <br></br>
        <InputMenu></InputMenu>
      </div>
    )
  }
  
  function InputLabel(props) {
    return (
      <label style={{
        color: 'orange',
        fontSize: '36px',
        fontFamily: 'roboto',
        textShadow: '2px 2px 0px  #000, 2px 2px 2px  #000, 2px 2px 2px  #000, 2px 2px 2px  #000',
      }}><b>{props.children}</b></label>
    )
  };
  
  function InputMenu() {
    return (
      <>
      <select type='text' style={{
        border: '2px orange solid',
        width: '300px',
        borderRadius: '8px',
        boxShadow: '2px 2px 0px'
      }}>
      </select>
      <AddNewButton></AddNewButton>
      </>
    )
  }
  
  function DetailsConfirmation() {
    return (
      <div id="DetailsConfirmation" style={{
        flex: 1,
        // backgroundColor: 'red',
        display: 'flex', flexDirection: 'column'
      }}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Detail label={"Quantity"} value={"€20"}/>
          <Detail label={"Price"} value={"€200"}/>
          <Detail label={"Shipping"} value={"€40"}/>
        </div>
        <br></br>
        <ShippingAddress/>
        <br></br>
        <center><CheckoutButton/></center>
        <br></br>
      </div>
    )
  };
  
  function ShippingAddress() {
    return (
      <div style={{
        flex: 1,
        backgroundColor: "royalblue",
        // height: '80px',
        padding: '12px',
        margin: '8px',
        display: 'flex', flexDirection: 'column',
        border: '4px black solid',
        borderRadius: '16px',
        boxShadow: '4px 4px 12px'
      }}>
        <StyledLabel>Shipping Address</StyledLabel>
        <p>
          <StyledLabel color={'white'}>Alex Dart<br></br></StyledLabel>
          <StyledLabel color={'white'}>SETU Carlow<br></br></StyledLabel>
          <StyledLabel color={'white'}>Kilkenny Road<br></br></StyledLabel>
          <StyledLabel color={'white'}>Carlow<br></br></StyledLabel>
          <StyledLabel color={'white'}>Ireland<br></br></StyledLabel>
          <StyledLabel color={'white'}>RXX YXX<br></br></StyledLabel>
        </p>
      </div>
    )
  }
  
  function Detail({label, value}) {
    return (
      <div style={{
        flex: 1,
        height: '80px',
        margin: '8px',
        backgroundColor: 'royalblue',
        display: 'flex', flexDirection: 'row', justifyItems: 'center',
        border: '4px black solid',
        borderRadius: '16px',
        boxShadow: '4px 4px 12px'
        }}>
          <StyledLabel>{label}</StyledLabel>
          <div style={{flex: 1}}/>
          <StyledLabel>{value}</StyledLabel>
      </div>)
  };
  
  function StyledLabel(props) {
    return (
      <label style={{
        margin: '12px',
        color: props.color,
        fontSize: '36px',
        textShadow: '2px 2px 0px  #000, 2px 2px 2px  #000, 2px 2px 2px  #000, 2px 2px 2px  #000',
        fontFamily: 'roboto'
      }}><b>{props.children}</b></label>
    )
  };
  
  StyledLabel.defaultProps = {
    color: 'orange'
  }