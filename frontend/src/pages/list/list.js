import React, { Component } from 'react';
import { Button, Row, Container } from 'react-bootstrap'
import api from '../../services/api';
import Header from '../../components/Header/Header.component'
import TableList from '../../components/table-list/table-list';
import { toastr } from 'react-redux-toastr';


class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            persons: [],
        }


    }

    drawClick() {
        api.put('drawn').then(res => {
            toastr.success('Success!');
        }).catch(error => {
            toastr.error('Erro!');
        })
    }

    async componentDidMount() {
        await api.get('readAll').then(res => {
            this.setState({ persons: [...this.state.persons, ...res.data.persons] })
        }).catch(err => {
            console.log(err)
        })
    }


    render() {
        return (
            <>
                <Header></Header>

                <Container>
                    <Row>
                        <TableList persons={this.state.persons}></TableList>
                    </Row>

                    <Row>
                        <Button disabled={this.state.persons == []} onClick={this.drawClick} variant="outline-dark ml-6 w-75">Draw</Button>

                    </Row>

                </Container>

            </>
        );
    }
}
export default List;