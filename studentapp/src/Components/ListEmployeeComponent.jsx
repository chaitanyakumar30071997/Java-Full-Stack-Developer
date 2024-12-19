import React, { useEffect , useState } from 'react'
import { deleteEmployee, ListEmployee } from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employee, setEmployees] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getAllEmpoyees();       
    },[])

    function getAllEmpoyees(){
        ListEmployee().then((response) => {
            setEmployees(response.data);
           }).catch(error => {
              console.error(error);
           })
    }  
   
    function addNewEmployee() {
        navigate('/add-employee')
 }

    function updateEmployee(id){
        navigate(`/edit-employee/${id}`)
 }


    function removeEmployee(id){
          console.log(id);
           
          deleteEmployee(id).then((response) => {
            getAllEmpoyees();

          }).catch(error => {
            console.error(error);
          })
    }
  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className="btn btn-success" onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-dark table-striped table-borderd'>
            <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee firstname</th>
                    <th>Employee name</th>
                    <th>Employee email</th>
                     <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(employee => 
                       <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstname}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                            <button className='btn btn-danger ' onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}> Delete</button>
                        </td>
                       </tr> )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent