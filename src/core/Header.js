import { ReactComponent as Hamburger } from 'src/Hamburger.svg'
import IconButton from 'src/components/IconButton'

export default function Header() {
    return (
  <header style={{
          display: "flex",
          flexDirection: "row",
          height: '60px', 
          backgroundColor: '#4D8CFF', 
          color: '#fff'}}>
            <div style={{
              height: '100%',
              width: '98%',
              marginLeft: '2%',
              display: "flex",
              flexDirection: "row",
              flex: 0.96
            }}>
           <Logo/>
           <IconButton>
            <Hamburger style={{width: '100%', height: '100%'}}></Hamburger>
           </IconButton>
            </div>
        </header>
    )
  }

function Logo() {
    return (
        <label 
            style={{
            margin: 'auto',
            padding: 'auto',
            flex: 1,
            color: '#FFE600',
            textShadow: '2px 2px 2px  #000, 2px 2px 2px  #000, 2px 2px 2px  #000, 2px 2px 2px  #000',
            fontFamily: 'roboto',
            fontSize: 36
            }}
        >
        Carte Payante</label>
    )
};

