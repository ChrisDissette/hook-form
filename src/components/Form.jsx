const Form = (props) => {

    const {info, setInfo} = props

    const onChangeHandler = event => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div style={{
            'width': '500px',
            'margin': 'auto',
            'margin-top': '50px'

        }}>
            <form> 
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={onChangeHandler} className='form-control' name='firstName'/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={onChangeHandler} className='form-control' name='lastName'/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={onChangeHandler} className='form-control' name='email'/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={onChangeHandler} className='form-control' name='password'/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" onChange={onChangeHandler} className='form-control' name='confirmPassword'/>
                </div>
            </form>
        </div>
    )
}

export default Form
