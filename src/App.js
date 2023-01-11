import logo from './logo.svg';
import './App.css';
import Lottie from "lottie-react";
import First from './Components/firstpage';
import Speech from './Components/speech';
import Remainder from './Components/remainder.js';
import Email from './Components/email.js';
import Currency from './Components/currency.js';
import Pdf from './Components/pdf.js';
import Fileupload from './firebase/upload';
import Pay from './Components/googlepay.js';
function App() {
  return (
    <div className="App">
      <First />
      <Speech />
      <Remainder />
      <Currency />
      <br></br>
      <br></br>
      <Pdf />
      <br></br>
      <Pay />
      <Fileupload />
      <br></br>
    </div>
  );
}
export default App;
