import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Create = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    console.log(firstName);
    console.log(lastName);
    const sendDataToApi =()=>{
        axios.post(`https://627e63a3271f386ceff72ae9.mockapi.io/crud`,{
            firstName,
            lastName
        });
    }
    return(
        <div>
            <Form>
                <Form.Field>
                <label>First Name</label>
                <input name='fname' placeholder='First Name' onChange={(e)=>setFirstname(e.target.value)} />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input name='lname' placeholder='Last Name' onChange={(e)=> setLastName(e.target.value)}/>
                </Form.Field>
                <Link to='/read'>
                <Button type='submit' onClick={sendDataToApi}>Submit</Button>
                </Link>
            </Form>
        </div>
    )
};

export default Create;