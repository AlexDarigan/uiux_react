import Header from "src/core/Header"
import Footer from "src/core/Footer";
import Body from "src/core/Body";
import LoginForm from "src/pages/LoginForm";
import CreateAccountForm from "src/pages/CreateAccountForm";
import BrowseCards from "src/pages/BrowseCards";
import CardDetails from "src/pages/CardDetails";
import CartPage from "src/pages/CartPage";
import CheckoutPage from "src/pages/CheckoutPage";
import './index.css';
import Inbox from "./pages/Inbox";
import PublicUserProfile from "./pages/PublicUserProfile";




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
    <Body content={<PublicUserProfile/>}/>    
    {/* <Footer/> */}
    </div>
  );
}

export default App;
