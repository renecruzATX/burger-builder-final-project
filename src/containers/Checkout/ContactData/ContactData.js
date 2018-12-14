import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';
import axios from 'axios';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            city: '',
            zipCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const data = {
            order: { 
                ingredients: this.props.ingredients,
                price: this.props.price,
                customer: {
                    name: 'Rene Cruz',
                    address: {
                        street: '1234 Main St',
                        city: 'Austin',
                        zipCode: '12345'
                    }
                },
                email: 'test@test.com',
                deliveryMethod: 'fastest'
            }            
        };

        axios.post('/orders', data)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                console.log('Error: ', error);
                this.setState({loading: false});
            });

        //Swithching to axios to reduce code
        /*fetch('/orders', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log('Success: ', JSON.stringify(response));
            this.setState({loading: false, purchasing: false});
        })
        .catch(error => {
            console.error('Error:', error);
            this.setState({loading: false, purchasing: false});
        });*/
    }

    render () {
        let form = (
            <form>
                <input className={styles.Input} type = "text" name="name" placeholder="Your Name" />
                <input className={styles.Input} type = "email" name="email" placeholder="Your email address" />
                <input className={styles.Input} type = "text" name="street" placeholder="Your Street" />
                <input className={styles.Input} type = "text" name="city" placeholder="Your City" />
                <input className={styles.Input} type = "text" name="zipCode" placeholder="Your Zipcode" />
                <Button btnType="Success" clicked={this.orderHandler}>Place Your Order</Button>
            </form>);
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Data</h4>
                {form}
            </div>
        );
    }
    
};

export default ContactData;
