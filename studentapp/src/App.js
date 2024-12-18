import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        {/* https://localhost:3000/ */}
        <Route path='/' element = {<ListEmployeeComponent/>}> </Route>
        {/* //https://localhost:3000/employess */}
        <Route path='/employees' element = {<ListEmployeeComponent/>}> </Route>
        {/* //https://localhost:3000/add-employee */}
        <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>

        {/* //https://localhost:3000/edit-employee/1 */}
        <Route path='/edit-employee/:id' element= {<EmployeeComponent />}></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App;
