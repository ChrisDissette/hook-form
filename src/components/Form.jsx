const Form = (props) => {

    const {info, setInfo} = props

    const onChangeHandler = event => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
    }

    const inputStyle = {
        'background':'#ecf0f3',
                    'padding':'10px',
                    'padding-left':'20px',
                    'margin-top':'15px',
                    'height':'50px',
                    'font-size':'14px',
                    'border-radius': '50px',
                    'box-shadow':'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white'
    }


    return (
        <div style={{
            'width':'350px',
            'height':'600px',
            'margin': 'auto',
            'margin-top':'100px',
            'padding':'40px',
            'padding-left':'80px',
            'border-radius':'20px',
            'box-sizing':'border-box',
            'background':'#ecf0f3',
            'box-shadow':'14px 14px 20px #cbced1, -14px -14px 20px white' 
        }}>
            <h3 style={{'margin-bottom':'25px'}}>Register Below</h3>
            <form>
                {/* <label htmlFor="firstName">First Name</label> */}
                <input type="text" onChange={onChangeHandler} name='firstName' placeholder='First Name'  style={inputStyle}/>
                <input type="text" onChange={onChangeHandler} name='lastName' placeholder='Last Name'  style={inputStyle}/>
                <input type="text" onChange={onChangeHandler} name='email' placeholder='Email'  style={inputStyle}/>
                <input type="text" onChange={onChangeHandler} name='password' placeholder='Password'  style={inputStyle}/>
                <input type="text" onChange={onChangeHandler} name='confirmPassword' placeholder='Confirm Password'  style={inputStyle}/>
                <input type="submit" 
                    style={{
                        'margin-top':'45px',
                        'margin-left':'30px',
                        'background':'#1DA1F2',
                        'height':'40px',
                        'width':'125px',
                        'border-radius':'20px',
                        'cursor':'pointer',
                        'font-weight': '900',
                        'transition':'0.5x',
                        'box-shadow':'6px 6px 6px #cbced1, -6px -6px 6px white'
                }} />
            </form>
        </div>
    )
}

export default Form
