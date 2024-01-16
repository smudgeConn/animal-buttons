import logo from './logo.jpg';
import './App.css';
import {CritterSwitcher} from "./CritterSwitcher";
import FactSwitcher from './FactSwitcher';

function App() {
  // return (
  //   <div className="App">
  //     <body className="App-body">
  //       <h1>Animal Generator</h1>
  //       <p>
  //         Click the button below to generate a random animal.
  //       </p>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <CritterSwitcher randomGenerator={() => Math.floor(Math.random() * 100)}/>
  //     </body>
  //   </div>
  // );
  return (
    <FactSwitcher />
  )
}

export default App;