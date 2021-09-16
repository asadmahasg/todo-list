import './App.css';
import SingleItem from "./components/SingleItem"
import Heading from "./components/Heading"
// import listItems from "./listItems"
import AddNewTask from './AddNewTask'

const listItems = [
  {
      id: 1,
      name: "Watch Movie on Sunday",
      date: "10 Jan 2021",
      time: "00:15:00"
  },
  {
      id: 2,
      name: "Make a new directory on github.com",
      date: "15 Feb 2021",
      time: "10:13:45"
  },
  {
      id: 3,
      name: "Play online game with friends",
      date: "11 Dec 2021",
      time: "07:13:45"
  },
  {
      id: 4,
      name: "Go for a walk with cousin",
      date: "20 March 2022",
      time: "05:13:45"
  },
  {
    id: 5,
    name: "Apply for a job",
    date: "01 April 2020",
    time: "01:00:00"
}
]


function App() {
  const listOfTask = listItems.map(function(items){
    return(
      <SingleItem key = {items.id} name = {items.name} date = {items.date} time = {items.time}/>
    )
  });

  return (
    <div className="App">
      <Heading />  
      <AddNewTask />
      {listOfTask}
    </div>
  );
}

export default App;
