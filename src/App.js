import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Teachers from './components/Teachers/Teachers';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <Teachers></Teachers>
    </div>
  );
}

export default App;
