import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Post from './Post';

const config = {
    width: "400px",
    height: "500px",
    floating: true,
};

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#00AAE4',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#00AAE4',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};


class SimpleForm extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <ChatBot 
                    steps={[
                        {
                            id: 'q-firstname',
                            message: 'Cual es tu primer nombre?',
                            trigger: 'firstname',
                        },
                        {
                            id: 'firstname',
                            user: true,
                            trigger: 'q-lastname'
                        },
                        {
                            id: 'q-lastname',
                            message: 'Cual es tu apellido?',
                            trigger: 'lastname',
                        },
                        {
                            id: 'lastname',
                            user: true,
                            trigger: 'q-email'
                        },
                        {
                            id: 'q-email',
                            message: 'Cual es tu Email?',
                            trigger: 'email',
                        },
                        {
                            id: 'email',
                            user: true,
                            trigger: 'q-report'
                        },
                        {
                            id: 'q-report',
                            message: 'Cual es tu reporte?',
                            trigger: 'report',
                        },
                        {
                            id: 'report',
                            user: true,
                            trigger: 'q-submit'
                        },
                        {
                            id: 'q-submit',
                            message: 'Quieres enviar?',
                            trigger: 'submit'
                        },
                        {
                            id: 'submit',
                            options: [
                                { value: 's', label: 'Si', trigger: 'end-message' },
                                { value: 'n', label: 'No', trigger: 'no-submit' },
                            ]
                        },
                        {
                            id: 'no-submit',
                            message: 'Your information was not submitted.',
                            end: true,
                        },
                        {
                            id: 'end-message',
                            component: <Post />,
                            asMessage: true,
                            end: true,
                        },
                    ]}
                    {...config}
                />
            </ThemeProvider>
        );
    }

}

export default SimpleForm;