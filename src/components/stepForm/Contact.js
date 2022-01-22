import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RenderAccordion } from './Review';

export const Contact = ({ formData, setForm, navigation }) => {
    const {
        firstName,
        lastName,
        nickName,
        address,
        city,
        state,
        zip,
        phone,
        email,
    } = formData;

    return (
        <Container maxWidth='xs'>
            <RenderAccordion
                summary='Names'
                go={navigation.go}
                details={[
                    { 'First Name': firstName },
                    { 'Last Name': lastName },
                    { 'Nick Name': nickName },
                ]}
            />
            <RenderAccordion
                summary='Address'
                go={navigation.go}
                details={[
                    { Address: address },
                    { City: city },
                    { State: state },
                    { Zip: zip },
                ]}
            />
            <h3>Contact</h3>
            <TextField
                label='Phone'
                name='phone'
                value={phone}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='E-Mail'
                name='email'
                value={email}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <div style={{ marginTop: '1rem' }}>
                <Button
                    color='secondary'
                    variant='contained'
                    style={{ marginRight: '1rem' }}
                    onClick={() => navigation.previous()}>
                    Back
                </Button>
                <Button
                    color='primary'
                    variant='contained'
                    onClick={() => navigation.next()}>
                    Next
                </Button>
            </div>
        </Container>
    );
};
