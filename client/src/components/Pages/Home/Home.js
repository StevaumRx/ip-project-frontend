import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component{


    render(){
        return(
            <div>

                <div className='ipp-home-helloworld'>
                    Hello World Home!
                </div>

                <Link to='Admin'>Admin</Link>
                

            </div>
        )
    }
}

export default Home;