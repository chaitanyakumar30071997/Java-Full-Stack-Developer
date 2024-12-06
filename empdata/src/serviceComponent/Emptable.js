function ListEmployee()  {   

    const empData = [
        {
            "id": 1,
            "FirstName": "shiva",
            "LastName": "M",
            "Email":"shiva@gmail.com"
        },
        {
            "id": 6,
            "FirstName": "Gangesh",
            "LastName": "kapaly",
            "Email": "gangesh@gmail.com"
        },
        { 
            "id": 7,
            "FirstName": "durgara",
            "LastName": "vza",
            "Email": "durga@gmail.com"
        }
    ]
    return (
        <div className='container'> 
            <h2>List of Emp</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        empData.map(emp =>
                            <tr key={emp.id}>
                                <td>{emp.id }</td>
                                <td>{emp.FirstName }</td>
                                <td>{emp.LastName }</td>
                                <td>{emp.Email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
     
}
export default ListEmployee