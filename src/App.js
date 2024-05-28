import logo from './logo.svg';
import './App.css';
import './Style/Style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AppRoutes from './Components/Routes';

function App() {
  return (
    <div className="App">
        <div class="scroll_watcher"></div>
      <AppRoutes/>
    </div>
  );
}

export default App;
