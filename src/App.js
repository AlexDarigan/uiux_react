import Header from "./core/Header"
import Footer from "./core/Footer";
import Body from "./core/Body";
import LoginForm from "./pages/LoginForm";
import CreateAccountForm from "./pages/CreateAccountForm";
import BrowseCards from "./pages/BrowseCards";
import CardDetails from "./pages/CardDetails";
import './index.css'

/* TODO
  Checkout Page (JS)
  Sellers Page (Prototype / Figma / JS)
  Inbox Page (Prototype / Figma / JS)
  Trade Page (Prototype / Figma / JS)
  Seller Inventory (Prototype / Figma / JS)
  User Profile Page (Prototype / Figma / JS)
  Seller Ratings / Review (Prototype / Figma / JS)
  Support (Prototype / Figma / JS)

  Search Filters (Prototype / Figma / JS)
  Header Menu (Prototype / Figma / JS)
*/


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


