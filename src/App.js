import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';

function App() {

  var name = "Ajit";
  var age = 26;
  var isMale = true;
  var marks = 8.9;

  var user = {
    name: "Harsh",
    age: 28,
  };

  return (
    <div className="App">
      <Header />
      <div style={{ backgroundColor: "green" ,padding:"100px"}}>

        <h1>Ajay</h1>
        <h1>{name}</h1>
        <h2>Age = {age}</h2>
        <h3>{isMale ? "male" : "female"}</h3>
        {user.name}<br />
        {user.age}

      </div>
        <Footer />
    </div>
  );
}

export default App;
