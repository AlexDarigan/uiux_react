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
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



function App() {
  // Store basic navigation here why not

  return (
    <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<CreateAccountForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
