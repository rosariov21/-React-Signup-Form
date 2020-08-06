import React from 'react';

class Forms extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email: "",
            password: "",
            gender: "",
            Occupation: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    emailhandler = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    passwordhandler =(event) =>{
        this.setState({
            password: event.target.value
        })
    }
    genderhandler =(event) =>{
        this.setState({
            gender:event.target.value
        })
    }
    Occupationhandler =(event) => {
        this.setState({
            Occupation:event.target.value
        })
    }

    handleSubmit =(event) =>{
        alert(`${this.state.email} ${this.state.password} ${this.state.gender} ${this.state.Occupation}`)
        console.log(this.state);
        this.setState({
            email: "",
            password: "",
            gender: "",
            Occupation: "",

        })
        event.preventDefault()
    
    
    }
    render(){
        return(
            <div>
                <h1>Register Now </h1>
                <form onSubmit={this.handleSubmit}>

                  
                    <input placeholder='email' type='text' value={this.state.email} onChange={this.emailhandler} />
                    <br/>
                    <input placeholder='Password:' id='submit' type='password' value={this.state.password} onChange={this.passwordhandler}/>
                    <br/>
                    <label for='female'>Female:</label>
                    <input name='gender'id='female'  type='radio' value={this.state.gender} onChange={this.genderhandler}/>
                    <label for='male'>Male:</label>
                    <input name='gender' id='male'type='radio'value={this.state.gender} onChange={this.genderhandler}/>
                   <br/>
                    <input placeholder='Occupation' type='text'value={this.state.Occupation} onChange={this.Occupationhandler}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default Forms;