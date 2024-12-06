import { listEmps } from "../empservice/Epmlist";

function AddEmp() {
    return (
        <>
            <div className='container'>
            <br/>
                <div className='row'>
                    <div className='card'>
                    <h2 className='text-center'> Add Employee</h2>
                        <div className='card-body'>

                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> content:</label>
                                    <input
                                        type='text'
                                        name='fName'
                                        className='form-control'
                                        placeholder='write a content in 200 '

                                    ></input>
                                    <label className='form-label'> created_at:</label>
                                    <input
                                        type='text'
                                        name='lName'
                                        className='form-control'
                                        placeholder='Write a date and Time'

                                    ></input>
                                    <label className='form-label'> title:</label>
                                    <input
                                        type='text'
                                        name='email'
                                        className='form-control'
                                        placeholder='  write a title in 200'

                                    ></input>
                                    <label className='form-label'> updated_at:</label>
                                    <input
                                        type='text'
                                        name='email'
                                        className='form-control'
                                        placeholder='When your update '

                                    ></input>


                                </div>



                            </form>



                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AddEmp