import React ,{useEffect, useState} from 'react'
import { Button, Label, Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Read = () => {
    const [apiData, setApiData]=useState([]);
    useEffect(()=>{
        axios.get('https://627e63a3271f386ceff72ae9.mockapi.io/crud')
        .then((getData)=>{
            setApiData(getData.data);
        });
    });
    const setDetails=(id, firstName, lastName)=>{
        console.log(id);
        localStorage.setItem('ID', id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
    }
    const setDeleteDetails=(id, firstName, lastName)=>{
        console.log(id);
        localStorage.setItem('ID', id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
    }
    
    return(
        <div>
            <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
            <Table.Body>
                {apiData.map((data, index)=>{
                    return(
                        <Table.Row key={index}>
                            <Table.Cell>
                            <Label ribbon>{data.firstName}</Label>
                            </Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.id}</Table.Cell>
                            <Table.Cell>
                                <Link to='/update'>
                                <Button color='green' onClick={()=>setDetails(data.id, data.firstName, data.lastName)}>Update</Button>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>
                                <Link to='/delete'>
                                <Button color='red' onClick={()=>setDeleteDetails(data.id, data.firstName, data.lastName)}>Delete</Button>
                                </Link>
                            </Table.Cell>
                        </Table.Row>
                    )
                })}
                </Table.Body>
        </Table>
  </div> 
)};

export default Read;