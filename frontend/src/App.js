import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './components/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
    <Header/>
    <main className='py-3'>

      <Container>
        <Switch>
        <Route exact path = '/' component = {HomeScreen} />
        <Route path = '/product/:id' component = {ProductScreen} />
        </Switch>
        
      </Container>
      
    </main>
    <Footer/>  
  </Router>
    
  );
}

export default App;
