import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
const Update = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);
    const sendDataToApi =()=>{
        console.log(firstName, lastName, ID);
        axios.put(`https://627e63a3271f386ceff72ae9.mockapi.io/crud/${ID}`,{
            firstName,
            lastName
        });
    }
    useEffect(()=>{
        setFirstname(localStorage.getItem('firstName'));
            setLastName(localStorage.getItem('lastName'));
            setID(localStorage.getItem('ID'));
            console.log(localStorage);
    },
       [] );
    return(
        <div>
            <Form>
                <Form.Field>
                <label>First Name</label>
                <input name='fname' placeholder='First Name' value={firstName} onChange={(e)=>setFirstname(e.target.value)} />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input name='lname' placeholder='Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={sendDataToApi}>Update</Button>
            </Form>
        </div>
    )
};

export default Update;