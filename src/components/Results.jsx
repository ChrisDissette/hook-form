import React from 'react'

const Results = (props) => {

    const {info, setInfo} = props

    return (
        <div style={{
            'width': '500px',
            'margin': 'auto',
            'margin-top': '50px'

        }}>
            <h3>First Name: {info.firstName}</h3>
            <h3>Last Name: {info.lastName}</h3>
            <h3>Email: {info.email}</h3>
            <h3>Password: {info.password}</h3>
        </div>
    )
}

export default Results
