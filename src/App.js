//npm packages
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//local imports
import './App.css';
import SignIn1 from './pages/auth1/sign_in1/SignIn1';
import SignUp1 from './pages/auth1/sign_up1/SignUp1';
import Forgot1 from "./pages/auth1/forgot1/Forgot1";
import Home1 from './pages/home1/Home1';
import Cart1 from './pages/cart1/Cart1';
import Shop1 from './pages/shop1/Shop1';
import SingleProduct1 from "./components/single_product1/SingleProduct1";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home1} />
        <Route path='/shop' component={Shop1} />
        <Route path='/product/:product_id' component={SingleProduct1} />
        <Route path='/cart' component={Cart1} />
        <Route path='/auth/signup' component={SignUp1} />
        <Route path='/auth/signin' component={SignIn1} />
        <Route path='/auth/forgot' component={Forgot1} />
      </Switch>
    </Router>
  )
}

export default App;
