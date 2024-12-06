import logo from './logo.svg';
import './App.css';
import Employee from './Component/Emp.js';
import Header from './Component/header .js';
import Footer from  './Component/footer.js';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import AddEmp from './Component/AddEmp.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
            //http://localhost:3000/
             <Route path = '/emplist' element={<Employee/>} ></Route>
             <Route path = '/addlist' element={<AddEmp/>} ></Route>
        </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
