import React, { useEffect , useState } from 'react'
import { ListEmployee } from '../Service/EmployeeService'

const ListEmployeeComponent = () => {

    const [employee, setEmployees] = useState([])

    useEffect(() => {
       ListEmployee().then((response) => {
        setEmployees(response.data);
       }).catch(error => {
          console.error(error);
       })
        
    },[])
   

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-dark table-striped table-borderd'>
            <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee name</th>
                    <th>Employee email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(employee => 
                       <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>

                       </tr> )

                }
            </tbody>
        </table>
      
    </div>
  )
}

export default ListEmployeeComponent