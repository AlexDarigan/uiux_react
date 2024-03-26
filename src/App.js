import Header from "./core/Header"
import Footer from "./core/Footer";
import Body from "./core/Body";

function App() {
  // Store basic navigation here why not


  return (
    <div 
      className="App" 
      style={{
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh'}}>
    <Header/>   
    <Body content={<LoginForm/>}/>    
    <Footer/>
    </div>
  );
}

export default App;

function LoginForm() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // margin: "0 auto", 
        // padding: "0", 
        border: '2px black solid'}}
    >
      <form style={{
          display: "flex", 
          flexDirection: "column", 
          padding: '24px',
          flex: .5,
          backgroundColor: "#005AFF", 
          margin: '0 auto', 
          border: '2px black solid'}}
        >
        
        <div>
          <label>Email</label>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{border: '12px black solid', margin: '6px', flex: .5}}/>
            <input type='text' style={{flex: .75, margin: '4px'}}></input>
          </div>
        </div>

        <div>
          <label>Password</label>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{border: '12px black solid', margin: '6px', flex: .5}}/>
            <input type='text' style={{flex: .75, margin: '4px'}}></input>
          </div>
        </div>

        <div style={{flex: .8}}></div>
        <TextButton text={'Login'}/>
        <br/>
        <TextButton text={'Create Account'}/>
        <br/>
        <TextButton text={'Forgot Password'}/>
      </form>
    </div>
  )
}

function TextButton({text}) {
  return (
    <button  style={{
      width: '200px',
      alignSelf: 'center',
      backgroundColor: "#FFA500",
      borderRadius: '16px',
      boxShadow: '2px 2px 2px'
  }}>{text}</button>
  )
}