
import './App.css';
import Autocomplete from './components/Autocomplete';

function App() {

   const staticData = ["Apple pure","Kolukattai","Butter milk","CHicken Tikka Masala"]
  

  return (
    <div className="App">
  <Autocomplete staticData={staticData}/>
     
    </div>
  );
}

export default App;
