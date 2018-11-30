import React from 'react'
import Moment from 'moment'

const helloWorld = () => {
    alert(`Hello World! ${Moment().format('DD/MM/YYYY')}`)
}

const Button = (props) => {

    return(

        <button onClick={() => helloWorld()}>
            { props.children }
        </button>
    )
}

export default Button