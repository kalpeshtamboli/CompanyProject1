import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./Layout/Navbar";
import Services from "./pages/Services/Services";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./pages/Footer/Footer";
import LoginDialog from "./components/LoginDialog";
import React, { useState } from "react";

function App() {
  const [openLogin, setOpenLogin] = useState(false);

  const getLoginDialogState = (value) => {
    setOpenLogin(value);
  };

  return (
    <div>
      <LoginDialog setOpen={getLoginDialogState} open={openLogin} />
      <div className="App bg-black">
        <BrowserRouter>
          <Navbar setLoginDialog={getLoginDialogState} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/Services" component={Services} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
