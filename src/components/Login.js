import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            newUser: false
        }
    }

    toggle = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const {email, password, firstName, lastName} = this.state;
        return <div className="login">
            <div className="login-container">
                <h1>Welcome!</h1>
                {!this.state.newUser ?
                <div>
                    <input onChange={e => this.changeHandler(e)} name="email" type="text" value={email} placeholder="Email"/>
                    <input onChange={e => this.changeHandler(e)} name="password" type="password" value={password} placeholder="Password"/>
                    <div className="btn-container">
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div> 
                </div>
                :
                <div>
                    <input onChange={e => this.changeHandler(e)} name="firstName" type="text" value={firstName} placeholder="First Name"/>
                    <input onChange={e => this.changeHandler(e)} name="lastName" type="text" value={lastName} placeholder="Last Name"/>
                    <input onChange={e => this.changeHandler(e)} name="email" type="text" value={email} placeholder="Email"/>
                    <input onChange={e => this.changeHandler(e)} name="password" type="password" value={password} placeholder="Password"/>
                    <div className="btn-container">
                        <button>Register</button>
                        <button>I already have an account</button>
                    </div>
                </div>   
            }
            </div> 
        </div>
}
}

export default Login;