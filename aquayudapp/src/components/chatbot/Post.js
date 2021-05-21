import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { submit, firstname, lastname, email,report } = steps;

    this.state =  { submit, firstname, lastname, email,report }; 
  }


  componentDidMount() {
    const userObject = {
      submit:this.state.submit.value,
      first_name:this.state.firstname.value,
      last_name:this.state.lastname.value,
      email:this.state.email.value,
      report:this.state.report.value,
    };
    axios.post(`/api`, userObject)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>Muchas gracias pronto vamos le vamos a responder!</div>
      );
    }
  };


  export default Post;