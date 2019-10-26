import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import './Contact.scss'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            phoneNumber: '',
            message: ''
        }
    }

    componentDidMount() {
        axios.get('https://localhost:5000/contact')
            .then(res => {
                const contact = res.data;
                this.setState({contact})
            });
    };

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    };

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    };

    onChangeCompanyName(e) {
        this.setState({
            companyName: e.target.value
        })
    };

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    };

    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        });
    };

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            companyName: this.state.companyName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            message: this.state.message,
            date: this.state.date,
        }

        console.log(contact);

        axios.post('https://localhost:5000/contact/add', contact)
            .then(res => console.log(res.data));

        window.location = "/";
    }

    render() {
        return (
            <div className="outermost-div">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="get-in-touch-heading">Get in touch</h2>
                        </Col>
                    </Row>
                    <Row className="contact-form-and-info">
                        <Col>
                            <h4>Free estimates</h4>
                            <p>
                                No matter what the project, we can tackle it. Equiping ourselves with 
                                the most up to date technologies ensuring high quality products. There are no 
                                problems we can not solve.
                            </p>
                        </Col>
                        <Col>
                            <div className="contact-form-container">
                                <div className="contact-form-fields">
                                    <label id="contact-label">
                                        First Name
                                    </label>
                                    <input
                                        type="name"
                                        placeholder="John"
                                        value={this.state.firstName}
                                        onChange={this.onChangeFirstName}
                                    />
                                    <label id="contact-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="name"
                                        placeholder="Smith"
                                        value={this.state.lastName}
                                        onChange={this.onChangeLastName}
                                    />
                                    <label id="contact-label">
                                        Company Name
                                    </label>
                                    <input
                                        type="name"
                                        placeholder="WebAmbrsosia LLC"
                                        value={this.state.companyName}
                                        onChange={this.onChangeCompanyName}
                                    />
                                    <label id="contact-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                    />
                                    <label id="contact-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="phone"
                                        placeholder="518-555-5555"
                                        value={this.state.phoneNumber}
                                        onChange={this.onChangePhoneNumber}
                                    />
                                    <label id="contact-label">
                                        Message
                                    </label>
                                    <input
                                        type="message"
                                        placeholder="Message..."
                                        value={this.state.message}
                                        onChange={this.onChangeMessage}
                                    />
                                    <Button>Submit</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
