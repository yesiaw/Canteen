import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Menu from './Components';

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <div>
          <Menu />
        </div>
        <Route path='/catigories/hotdishes' render={() => <h1>Горячие блюда  </h1>} />
        <Route path='/catigories/salads' render={() => <h1>Салаты</h1>} />
        <Route path='/catigories/colddishes' render={() => <h1>Холодные блюда</h1>} />
      </BrowserRouter>



    </div>
  );
}

export default App;
