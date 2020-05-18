import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import api from '../../services/api'

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const peoples = props.persons.map((people) => {
        return (
            <tr key={people._id}>
                <td>{people.name}</td>
                <td>{people.email}</td>
                <td>
                    <Button variant="outline-danger ">Remove</Button>
                    <Button variant="outline-light ml-3">Update</Button>
                </td>
            </tr>
        );
    });

    return (
        <tbody>
            {peoples}
        </tbody>
    );
}

class TableList extends Component {

    render() {

        const { persons } = this.props;

        return (
            <Table striped bordered hover variant="dark" className="centered highlight w-75 ml-6 mt-3">
                <TableHead />
                <TableBody persons={persons} />
            </Table>

        );
    }
}

export default TableList;