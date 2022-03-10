import { useState } from 'react';
import './App.css';
import AddNewCity from './Compnentss/AddNewCity';
import ListOfCities from './components/ListOfCities';
import NavBar from './components/NavBar';
import { data } from './data';

function App() {
  const AddNew=(x)=>{
    return setCities([...Cities,x])}
    const AddFil=(y)=>{
      return setCities(Cities.filter(el=>el.city.toLowerCase().includes(y.toLowerCase())))}
const [Cities,setCities] = useState(data);
  return (
    <div className="App">

   <NavBar Fun={AddFil} />
   <ListOfCities LOfCities={Cities}/>
   <AddNewCity/>
    </div>
  );
}

export default App;
