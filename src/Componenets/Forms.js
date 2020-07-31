import React from 'react';

class Forms extends React.Component{
    render(){
        return(
            <div>
                <h3>Login</h3>
                <form>
                    <input placeholder='email' type='text'/>
                    <br/>
                    <input placeholder='Password:' id='submit' type='password'/>
                    <br/>
                    <label for='female'>Female:</label>
                    <input name='gender'id='female'  type='radio'/>
                    <label for='male'>Male:</label>
                    <input name='gender' id='male'type='radio'/>
                   <br/>
                    <input placeholder='Occupation' type='text'/>
                    <br/>
                    
                </form>
            </div>
        )
    }
}
export default Forms;