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
          <Dictionary defaultKeyword="ambitious" />
         </main>
         <footer className="App-footer text-center">
            <small>Coded and {" "} 
            <a href="https://github.com/karlie101/dictionary-project-kh">open-sourced</a>{""} with 🖤 by Karlie Howard</small>
         </footer>
      </div>
    </div>
  );
}


