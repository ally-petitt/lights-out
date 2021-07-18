import './App.css';

import Header from "./components/header/Header"
import Tabs from "./components/Tabs"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="board-container d-flex justify-content-center"
       style={{minHeight: "80vh", width: "100vw"}}>
        <Tabs />
      </div>
    </div>
  );
}

export default App;
