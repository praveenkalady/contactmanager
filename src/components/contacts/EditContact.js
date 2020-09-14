import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from './TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
    state ={
        name:'',
        email:'',
        phone:'',
        errors:{}
    }
    async componentDidMount(){
        const { id } = this.props.match.params;

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;
        this.setState({ name:contact.name, email:contact.email, phone:contact.phone});
    }
    onSubmit = async (dispatch,e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        const { id  } = this.props.match.params;
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
        const updContact = {
            name,
            email,
            phone
        };
       const res = await  axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact)
       dispatch({ type:'UPDATE_CONTACT', payload:res.data });
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
                        <h2 className="display-4 text-dark">Edit Contacts</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <TextInputGroup error={errors.name} label="Name" name="name" placeholder="Enter Name..." type="text" value={name} onChange={this.onChange} />
                            <TextInputGroup error={errors.email} label="Email" name="email" placeholder="Enter Email..." type="email" value={email} onChange={this.onChange} />
                            <TextInputGroup error={errors.phone} label="phone" name="phone" placeholder="Enter Phone..." type="text" value={phone} onChange={this.onChange} />
                            <input onClick={this.onSubmit.bind(this,dispatch)} className="btn btn-success btn-block" value="Update Contact" type="button"/>
                        </form>
                    </div>
                </div>
                )
            }}
            </Consumer>
        );
    }
}

export default EditContact;
