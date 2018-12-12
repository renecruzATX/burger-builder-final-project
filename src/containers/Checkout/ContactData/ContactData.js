import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            city: '',
            zipCode: ''
        }
    }

    render () {
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Data</h4>
                <form>
                    <input className={styles.Input} type = "text" name="name" placeholder="Your Name" />
                    <input className={styles.Input} type = "email" name="email" placeholder="Your email address" />
                    <input className={styles.Input} type = "text" name="street" placeholder="Your Street" />
                    <input className={styles.Input} type = "text" name="city" placeholder="Your City" />
                    <input className={styles.Input} type = "text" name="zipCode" placeholder="Your Zipcode" />
                    <Button btnType="Success">Place Your Order</Button>
                </form>
            </div>
        );
    }
    
};

export default ContactData;
