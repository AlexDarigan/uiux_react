import Header from "./core/Header"
import Footer from "./core/Footer";
import Body from "./core/Body";
import LoginForm from "./pages/LoginForm";
import CreateAccountForm from "./pages/CreateAccountForm";
import BrowseCards from "./pages/BrowseCards";
import CardDetails from "./pages/CardDetails";
import './index.css'


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
    <Body content={<CardDetails/>}/>    
    {/* <Footer/> */}
    </div>
  );
}

export default App;


