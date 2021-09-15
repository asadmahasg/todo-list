import './App.css';
import SingleItem from "./components/SingleItem"
import Heading from "./components/Heading"
import listItems from "./listItems"

let itemList = listItems.forEach(function(items){
  console.log(items.name);
});

function App() {
  
  return (
    <div className="App">
      <Heading />  
      <SingleItem />
      
      
    </div>
  );
}

export default App;
