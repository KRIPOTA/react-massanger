import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';








export function FormPresent(props) {
    return (
        <>
            <form onSubmit={props.handleSubmit} style={{ marginBottom: '20px', marginTop: '30px', marginLeft: '30px' }}>
                <TextField
                    id="standard-basic"
                    label="Your Message"
                    variant="standard"
                    size="small"
                    type="text"
                    value={props.text}
                    onChange={(event) => props.setText(event.target.value)}
                    autoFocus
                />
                <Button variant="contained" color="success" type="submit" size="small" sx={{ marginLeft: '3px', marginTop: '14px', width: '150px' }}>Add message</Button>
            </form>
        </>
    )
}