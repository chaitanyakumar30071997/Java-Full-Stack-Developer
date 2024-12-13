import React, { useState } from 'react'
import { createEmployee } from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

  const [id , setid]= useState('')
  const [name , setname]= useState('')
  const [email , setemail]= useState('')

 const [errors, setErrors] = useState({
    name: '',
    email: ''
  })

  const navigator = useNavigate();
  
  function saveEmployee(e){
    e.preventDefault();

    if(validateForm()){
      const employee ={id,name,email}
    console.log(employee)

    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator('/employees')

    })

    }   

  }

  function validateForm(){
    let valid = true;

    const errorsCopy = {... errors} 

    if(name.trim()){
      errorsCopy.name='';
    } else{
      errorsCopy.name= 'name is required';
      valid = false;
    }
    if(email.trim()){
      errorsCopy.email='';
    } else{
      errorsCopy.email= 'email is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
    
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
                     className={ `form-control ${errors.name ? 'is-invalid': '' }`}
                     onChange={(e) => setname(e.target.value)}
                  > 
                  </input>  
                      {errors.name && <div className='invalid-feedback'>{errors.name} </div>}    
                </div>

                <div  className='from-group mb-2'>
                  <label className='form-lable'>Email:</label>
                  <input 
                     type='text'
                     placeholder='Email'
                     name='Email'
                     value={email}
                     className={ `form-control ${errors.email ? 'is-invalid': '' }`}
                     onChange={(e) => setemail(e.target.value)}
                  > 
                  </input>   
                  {errors.email && <div className='invalid-feedback'>{errors.email} </div>}    
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
