import logo from "./dictionary-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
         <header className="App-header">
           <img src={logo} className="App-dictionary-logo img-fluid"
        alt="dictionary" />
         </header>
         <main>
          <Dictionary />
         </main>
         <footer className="App-footer">
            <small>Coded by Karlie</small>
         </footer>
      </div>
    </div>
  );
}


