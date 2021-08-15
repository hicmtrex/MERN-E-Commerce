
import "./App.css";
import { useState ,useContext} from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import Footer from "./components/Footer";
import Register from "./components/Forms/Register";
import { AuthProvider } from "./store/auth-context";
import Login from "./components/Forms/Login";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <AuthProvider>  
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} /> 
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
         
      </main>
      <Footer/>
      </Router>
      </AuthProvider>
     
  );
}

export default App;