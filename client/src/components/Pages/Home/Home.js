import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component{


    render(){
        return(
            <div className='container'>

                <div className='ipp-home-helloworld'>
                    Hello World Home!
                    teste aqui
                </div>
                <div className='jumbotron'>
                TESTE 123
                </div>

                <Link to='Admin'>Admin</Link>
                

            </div>
        )
    }
}

export default Home;