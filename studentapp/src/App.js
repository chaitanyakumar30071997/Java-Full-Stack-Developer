import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        {/* https://localhost:3000/ */}
        <Route path='/' element = {<ListEmployeeComponent/>}> </Route>
        
        {/* //https://localhost:3000/employess */}
        <Route path='/employess' element = {<ListEmployeeComponent/>}> </Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App;
