import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '../../GlobalComponents/Button'

class Admin extends Component{
    render(){
        return(
            <div>

                <div className = 'ipp-admin-helloworld'>
                    Hello World Admin!
                </div>

                <Link to='/'>Go back</Link>

                <Button>
                    Click Me
                </Button>
                
            </div>
        )
    }
}

export default Admin;