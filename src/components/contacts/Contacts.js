import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
    render() {
        return(
            <Consumer>
            {value => {
                const { contacts } = value;
                return (
                    <React.Fragment>
                    {contacts.map((contact,i)=>(
                        <Contact id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} />
                    ))}
                    </React.Fragment>
                )
            }}
        </Consumer>
        )  
    }
}

export default Contacts;
