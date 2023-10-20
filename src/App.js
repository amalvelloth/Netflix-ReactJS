import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import  {action,comedy,originals} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    // Set the title when the component mounts
    document.title = 'Netflix - Watch TV Shows Online, Watch Movies Online';

    // You can also reset the title when the component unmounts
    return () => {
      document.title = 'My Awesome React Site';
    };
  }, []);



  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
    </div>
  );
}

export default App;

