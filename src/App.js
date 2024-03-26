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
    <Body content={<label>Hello World</label>}/>    
    <Footer/>
    </div>
  );
}



export default App;
