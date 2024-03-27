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



/* TODO
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
    <Body content={<CheckoutPage/>}/>    
    {/* <Footer/> */}
    </div>
  );
}

export default App;
