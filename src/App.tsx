
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/Navbar';
import   
 Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
       <About />
       <Services />
    </Provider>
  );
}

export default App;