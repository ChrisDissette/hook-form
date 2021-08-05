import React from 'react'

const Results = (props) => {

    const {info, setInfo} = props

    return (
        <div style={{
            'width':'350px',
            'height':'200px',
            'margin': 'auto',
            'margin-top':'40px',
            'margin-bottom':'25px',
            'padding':'30px',
            'padding-left':'20px',
            'border-radius':'20px',
            'box-sizing':'border-box',
            'background':'#ecf0f3',
            'box-shadow':'14px 14px 20px #cbced1, -14px -14px 20px white' 
        }}>
            <p>First Name: {info.firstName}</p>
            <p>Last Name: {info.lastName}</p>
            <p>Email: {info.email}</p>
            <p>Password: {info.password}</p>
        </div>
    )
}

export default Results
