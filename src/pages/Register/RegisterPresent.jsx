import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function RegisterPresent(props) {
    return (
        <>
            <h2>Register</h2>
            <form onSubmit={props.handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '120px', width: '220px' }}>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        size="small"
                        type="text"
                        name="email"
                        value={props.inputs.email}
                        onChange={(e) => props.setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        size="small"
                        type="text"
                        name="password"
                        value={props.inputs.password}
                        onChange={(e) => props.setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                    />
                    <Button type='submit'>SignUp</Button>
                </Box>
            </form>
            {props.loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
            {props.error && <p style={{ color: 'red' }}>{props.error}</p>}
        </>
    )
}