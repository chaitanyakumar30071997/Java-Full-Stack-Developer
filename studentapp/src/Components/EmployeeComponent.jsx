import React, { useState } from 'react'
import { createEmployee } from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

  const [id , setid]= useState('')
  const [name , setname]= useState('')
  const [email , setemail]= useState('')

  const navigator = useNavigate();
  
  function saveEmployee(e){
    e.preventDefault();
    
    const employee ={id,name,email}
    console.log(employee)

    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator('/employees')

    })

  }

  return (
      <div className='container'>
        <br />  <br/>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Add Employee</h2>
            <div className='card-body'>
              <form>
                <div  className='from-group mb-2'>
                  <label className='form-lable'>Enter Id Number : </label>
                  <input 
                     type='text'
                     placeholder='Enter id Number'
                     name='id'
                     value={id}
                     className='form-control'
                     onChange={(e) =>  setid(e.target.value)}
                  > 
                  </input>      
                </div>

                <div  className='from-group mb-2'>
                  <label className='form-lable'>Enter Name : </label>
                  <input 
                     type='text'
                     placeholder='Name'
                     name='name'
                     value={name}
                     className='form-control'
                     onChange={(e) => setname(e.target.value)}
                  > 
                  </input>      
                </div>

                <div  className='from-group mb-2'>
                  <label className='form-lable'>Email:</label>
                  <input 
                     type='text'
                     placeholder='Email'
                     name='Email'
                     value={email}
                     className='form-control'
                     onChange={(e) => setemail(e.target.value)}
                  > 
                  </input>      
                </div>
                  <button className='btn-btn-success' onClick={saveEmployee}>submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EmployeeComponent
