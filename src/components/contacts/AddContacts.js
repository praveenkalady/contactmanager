import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from './TextInputGroup';
import axios from 'axios';

class AddContacts extends Component {
    state ={
        name:'',
        email:'',
        phone:'',
        errors:{}
    }
    onSubmit = (dispatch,e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        if(name === ''){
            this.setState({ errors:{name:'Name is Required...'} });
            return;
        }
        if(email === ''){
            this.setState({ errors:{email:'Email is Required...'} });
            return;
        }
        if(phone === ''){
            this.setState({ errors:{phone:'Phone is Required...'} });
            return;
        }
        const newContact = {
            name,
            email,
            phone
        };
        axios.post('https://jsonplaceholder.typicode.com/users',newContact)
        .then(res => dispatch({ type:'ADD_CONTACT', payload:newContact }));
        this.setState({ name:'',email:'', phone:'',errors:{} });
        this.props.history.push('/');
    }
    onChange = (e) => this.setState({ [e.target.name]:e.target.value });
    render() {
        const { name, email, phone,errors } = this.state;
        return (
            <Consumer>
            {value => {
                const { dispatch } = value;
                return (
                    <div className="card mb-3">
                    <div className="card-header text-center">
                        <h2 className="display-4 text-dark">Add Contacts</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <TextInputGroup error={errors.name} label="Name" name="name" placeholder="Enter Name..." type="text" value={name} onChange={this.onChange} />
                            <TextInputGroup error={errors.email} label="Email" name="email" placeholder="Enter Email..." type="email" value={email} onChange={this.onChange} />
                            <TextInputGroup error={errors.phone} label="phone" name="phone" placeholder="Enter Phone..." type="text" value={phone} onChange={this.onChange} />
                            <input onClick={this.onSubmit.bind(this,dispatch)} className="btn btn-success btn-block" value="Add Contact" type="button"/>
                        </form>
                    </div>
                </div>
                )
            }}
            </Consumer>
        );
    }
}

export default AddContacts;
