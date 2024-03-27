import IconButton from "src/components/IconButton";
import { ReactComponent as FilterIcon } from 'src/icons/filter.svg'
import { ReactComponent as SearchIcon } from 'src/icons/search.svg'
import { ReactComponent as UpIcon } from 'src/icons/up.svg'
import { ReactComponent as DownIcon } from 'src/icons/down.svg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as BlackLotusIcon } from 'src/icons/blacklotus.svg'

export default function BrowseCards() {

    return (
      <div style={{flex: 1, display: "flex", height: '60%', flexDirection: "column", alignItems: 'center'}}>
        <div style={{
            flex: .92,
            display: "flex", 
            flexDirection: "column", 
            padding: '12px',
            width: '92%',
            justifyContent: 'center',
            marginTop: '24px',
            marginBottom: '32px',
            backgroundColor: "RoyalBlue", 
            border: '4px black solid',
            borderRadius: '8px'}}
        >
          <SearchBar/>
          <br></br>
          <div style={{
              flex: .90, 
              width: '94%', 
              alignSelf: 'center',  
              }}>
            <Results/>
          </div>
        </div>
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
            <TableRow>
              <HeaderCell text="Image"/>
              <HeaderCell text="Name"/>
              <HeaderCell text="Edition"/>
              <HeaderCell text="Rarity"/>
              <HeaderCell text="Set Code"/>
              <HeaderCell text="Game"/>
              <HeaderCell text="Actions"/>
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
  
  function HeaderCell({text}) {
    return (
      <TableCell align="center" style={{backgroundColor: '#4D8CFF', border: '2px black solid', fontFamily: 'roboto', fontSize: '36px'}}><b>{text}</b></TableCell>
    )
  };
  
  function RowCell(props) {
    return (
      <TableCell align="center" style={{border: '2px black solid', fontFamily: 'roboto', fontSize: '30px'}}>{props.children}</TableCell>
    )
  };
  
  function Row() {
    return (
      <TableRow>
        <RowCell><BlackLotusIcon/></RowCell>
        <RowCell>Black Lotus</RowCell>
        <RowCell>1st</RowCell>
        <RowCell>Rare</RowCell>
        <RowCell>Alpha 001</RowCell>
        <RowCell>Magic: The Gathering</RowCell>
        <RowCell><button style={{
            width: '100px', 
            height: '60px', 
            border: '3px solid black',
            backgroundColor: 'orange',
            boxShadow: '2px 2px 2px',
            borderRadius: '6px'
            }}>View</button></RowCell>
      </TableRow>
    )
  }
  
  function SearchBar() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', height: '40px'}}>
              <IconButton>
                <FilterIcon style={{width: '100%', height: '100%'}}></FilterIcon>
              </IconButton>
              <input type='text' style={{flex: .94, border: '3px #FFA500 solid', borderRadius: '6px'}}></input>
              <IconButton>
                <SearchIcon style={{width: '100%', height: '100%'}}></SearchIcon>
              </IconButton>
            </div>
    )
  };