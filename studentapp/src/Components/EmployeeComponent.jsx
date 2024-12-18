import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee } from '../Service/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

  const [firstname , setfirstname]= useState('')
  const [name , setname]= useState('')
  const [email , setemail]= useState('')

  const {id} = useParams();

 const [errors, setErrors] = useState({
    firstname: '',
    name: '',
    email: ''
  })

  const navigator = useNavigate();

  useEffect(() => {
     if(id){
      getEmployee(id).then((response) => {
        setfirstname(response.data.firstname);
        setname(response.data.name);
        setemail(response.data.email);
      }).catch(error => {
         console.error(error);
      })
      
     }
  },[id])
  
  function saveEmployee(e){
    e.preventDefault();

    if(validateForm()){
      const employee ={firstname,name,email}
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

  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Update Employee</h2>
    }else{
      return <h2 className='text-center'>Add Employee</h2>
    }

  }

  return (
      <div className='container'>
        <br />  <br/>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
              pageTitle()
            }
            <div className='card-body'>
              <form>
                <div  className='from-group mb-2'>
                  <label className='form-lable'>Enter firstname Number : </label>
                  <input 
                     type='text'
                     placeholder='Enter id Number'
                     name='id'
                     value={firstname}
                     className='form-control'
                     onChange={(e) =>  setfirstname(e.target.value)}
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