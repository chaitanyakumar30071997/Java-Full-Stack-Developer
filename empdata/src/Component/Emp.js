import {useEffect, useState} from 'react'
import {listEmps} from '../empservice/Epmlist.js'

function Employee()  {   

    const [empData, setEmpData] = useState([])

       useEffect( 
        () => {
            listEmps().then((response) => {
                setEmpData(response.data);
            }
        ).catch(error => {
            console.error(error)
        })
        }
        
        ,[])
        

    return (
        <div className='container'> 
            <h2>List of Emp</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>content</th>
                        <th>created_at</th>
                        <th>title</th>
                        <th> updated_at</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        empData.map(emp =>
                            <tr key={emp.id}>
                                <td>{emp.id }</td>
                                <td>{emp.content }</td>
                                <td>{emp.created_at }</td>
                                <td>{emp.title}</td>
                                <td>{emp.updated_at}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
     
}
export default Employee