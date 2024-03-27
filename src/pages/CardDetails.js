import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as EnglishFlag } from 'src/icons/english.svg';
import { ReactComponent as GermanyFlag } from 'src/icons/germany.svg';
import { ReactComponent as BlackLotusIcon } from 'src/icons/blacklotus.svg';

export default function CardDetails() {
    return (
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{
              flex: .92,
              display: "flex", 
              flexDirection: "row", 
              padding: '12px',
              width: '92%',
              justifyContent: 'center',
              marginTop: '24px',
              marginBottom: '32px',
              backgroundColor: "RoyalBlue", 
              border: '4px black solid',
              borderRadius: '8px'
        }}
          >
          <div style={{flex: .4, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
            <BlackLotusIcon style={{width: '90%', height: '90%'}}></BlackLotusIcon>
          </div>
          <div style={{
                flex: .90, 
                width: '94%', 
                alignSelf: 'center',
                marginRight: '20px'  
                }}>
              <Results/>
            </div>
        </div>
      </div>
    )
  }
  
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
              <RowCell backgroundColor={'orange'}>Seller</RowCell>
              <RowCell backgroundColor={'orange'}>Condition</RowCell>
              <RowCell backgroundColor={'orange'}>Language</RowCell>
              <RowCell backgroundColor={'orange'}>Location</RowCell>
              <RowCell backgroundColor={'orange'}>Price</RowCell>
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
        <RowCell>@AlexDart</RowCell>
        <RowCell>
          <Condition/>
        </RowCell>
        <RowCell>
          <Language></Language>
        </RowCell>
        <RowCell>
          <Location></Location>
        </RowCell>
        <RowCell>€200</RowCell>
        <RowCell>
          <ActionButton>Add</ActionButton>
          <ActionButton>Fave</ActionButton>
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
  
  function Location() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <GermanyFlag/>
        <div style={{flex: .2}}></div>
        <text>Germany</text>
      </div>
    )
  };
  
  function Condition() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{width: '42px', height: '42px', borderRadius: '21px', backgroundColor: 'green'}}/>
        <div style={{flex: .2}}></div>
        <text>Good</text>
      </div>
    )
  };
  
  function ActionButton(props) {
    return (
      <button style={{
        width: '60px', 
        height: '60px',
        margin: '4px',
        border: '3px solid black',
        backgroundColor: 'orange',
        boxShadow: '2px 2px 2px',
        borderRadius: '6px'
        }}>{props.children}</button>
    )
  }
  