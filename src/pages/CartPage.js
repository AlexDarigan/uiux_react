import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as EnglishFlag } from 'src/icons/english.svg';
import { ReactComponent as AddIcon } from 'src/icons/add.svg'
import { ReactComponent as RemoveIcon } from 'src/icons/remove.svg'

export default function CartPage() {
    return (
      <div style={{
          paddingTop: '48px',
          flex: .92, 
          width: '96%', 
          alignSelf: 'center',
          display: 'flex', 
          flexDirection: 'column', 
        }}
        >
        {/* <div style={{flex: .92, backgroundColor: 'royalblue', border: '4px black solid', borderRadius: '8px'}}> */}
          <Results/>
        {/* </div> */}
        <div style={{flex: .5}}/>
        <div style={{flex: .01, display: 'flex', flexDirection: 'row', backgroundColor: 'royalblue', border: '4px black solid', borderRadius: '8px'}}>
          <PurchaseInfo/>
        </div>
      </div>
    )
  }
  
  function PurchaseInfo() {
    return (
      <div style={{flex: 1, display: 'flex', flexDirection: 'row', 
          marginLeft: '24px', marginRight: '24px', marginTop: '4px', marginBottom: '4px'}}>
            <div style={{flex: 1}}><text><b>Quantity: 27 Cards</b></text></div>
            <div style={{flex: 1}}><text><b>Price: €2000</b></text></div>
            <button style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                    padding: 'auto',
                    textAlign: 'center',
                    backgroundColor: "#FFA500",
                    borderRadius: '8px',
                    boxShadow: '2px 2px 2px'
                }}>
              Purchase 27 cards for €2000
            </button>
          </div>  
    )
  };
  
  function Results() {
    return (
      // <Table>
      //   <TableHead><label>Text</label></TableHead>
      // </Table>
      <>
      <TableContainer style={{maxHeight: '700px', backgroundColor: 'white', border: '6px orange solid', borderRadius: '6px'}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow style={{backgroundColor: 'orange'}}>
              <RowCell backgroundColor={'orange'}>Language</RowCell>
              <RowCell backgroundColor={'orange'}>Card Name</RowCell>
              <RowCell backgroundColor={'orange'}>Seller</RowCell>
              <RowCell backgroundColor={'orange'}>Price</RowCell>
              <RowCell backgroundColor={'orange'}>Quantity</RowCell>
              <RowCell backgroundColor={'orange'}>Actions</RowCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
            <Row/>
          </TableBody>
        </Table>
      </TableContainer>
      </>
    )
  }
  
  
  function RowCell({backgroundColor, border, fontSize, fontFamily, children}) {
    return (
      <TableCell 
        align="center" 
        style={{
          backgroundColor: backgroundColor,
          border: border, 
          fontFamily: fontFamily, 
          fontSize: fontSize,
        }}>{children}</TableCell>
    )
  };
  
  RowCell.defaultProps = {
    "backgroundColor": 'wheat',
    "fontSize": '30px',
    "fontFamily": 'roboto',
    "border": "2px black solid",
  }
  
  function Row({backgroundColor}) {
    return (
      <TableRow style={{backgroundColor: backgroundColor}}>
        <RowCell>
          <Language></Language>
        </RowCell>
        <RowCell>
          Black Lotus
        </RowCell>
        <RowCell>
          @AlexDart
        </RowCell>
        <RowCell>
          €200
        </RowCell>
        <RowCell>
          1
        </RowCell>
        <RowCell>
          <ActionButton backgroundColor='mediumseagreen'><AddIcon/></ActionButton>
          <ActionButton backgroundColor='tomato'><RemoveIcon/></ActionButton>
        </RowCell>
      </TableRow>
    )
  }
  
  function Language() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <EnglishFlag></EnglishFlag>
        <div style={{flex: .2}}></div>
        <text>English</text>
      </div>
    )
  };
  
  function ActionButton(props) {
    return (
      <button style={{
        width: '60px', 
        height: '60px',
        margin: '4px',
        backgroundColor: props.backgroundColor,
        boxShadow: '2px 2px 2px',
        borderRadius: '6px'
        }}>{props.children}</button>
    )
  }
  
  ActionButton.defaultProps = {
    backgroundColor: 'gold'
  }
  
  