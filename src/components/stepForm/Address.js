import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RenderAccordion } from './Review';

export const Address = ({ formData, setForm, navigation }) => {
    const { firstName, lastName, nickName, address, city, state, zip } =
        formData;
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
            <h3>Address</h3>
            <TextField
                label='Address'
                name='address'
                value={address}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='City'
                name='city'
                value={city}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='State'
                name='state'
                value={state}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            <TextField
                label='Zip'
                name='zip'
                type='number'
                value={zip}
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
            <br />

            <h1> Your Address: {address}</h1>

            <h1> Your City: {city}</h1>

            <h1> Your state: {state}</h1>

            <h1> Your Zip: {zip}</h1>
        </Container>
    );
};
