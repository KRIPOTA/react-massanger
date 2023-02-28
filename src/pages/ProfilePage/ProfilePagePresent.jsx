import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export function ProfilePagePresent(props) {
    return (
        <>
            <h1>ProfilePage</h1>
            <h2 hidden={props.visible}>Visible</h2>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Скрыть надпись Visible" onClick={() => props.dispatch(props.toggleProfile())} />
            </FormGroup>
        </>
    )
}