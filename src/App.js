import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderApp } from './components/HeaderApp';
import { Home } from './views/Home';
import { Route, Switch } from 'react-router-dom';
import { ProductView } from './views/ProductView';
import { PurchaseView } from './views/PurchaseView';


const App = () => {
  return (
 <>
        <HeaderApp />
        <Switch>
          <Route path={"/"} exact component={Home } />
          <Route path={"/product/:id"} exact component={ ProductView } />
          <Route path={"/purchase"} exact component={PurchaseView } />
          <Route path={"/"} exact component={Home} />
        </Switch>
 </>
  );
};

export default App;