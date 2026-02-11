import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List';

function App() {
  return (
    <div>
    <Navbar />
    <List title="Todo List" />
    </div>
  );
}

export default App;