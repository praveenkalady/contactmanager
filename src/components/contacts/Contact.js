import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
    state = {
        isOpen:false
    }
  handleDelete = async (id,dispatch)  => {
       await  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
       dispatch({
        type:'DELETE_CONTACT',
        payload:id
        });
       
    }
    render() {
        const { isOpen } = this.state;
        const { id, name, email, phone } = this.props;
        const showRest = () => {
            this.setState({ isOpen:!isOpen })
        }
        return (

            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                        <div className="card-header d-flex align-items-center">
                            <h1>{name}</h1>
                            <div className="ml-auto d-flex align-items-center">
                            <button onClick={showRest} className="mr-2 btn-primary"><i className="fa fa-chevron-circle-down fa-2x"></i></button>
                            <button onClick={this.handleDelete.bind(this,id,dispatch)}  className="mr-2 btn-danger "><i className="fa fa-times fa-2x"></i>
                            </button>
                            <Link to={`/edit/${id}`}>
                            <button  className="btn btn-secondary">
                                <i className="fa fa-pencil"></i>
                            </button>
                            </Link>
                            </div>
                        </div>
                        {isOpen ?  <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">{email}</li>
                            <li className="list-group-item">{phone}</li>
                        </ul>
                    </div> : null }
                    </div>
                    )
                }}
            </Consumer>
        );
    }
}

export default Contact;
