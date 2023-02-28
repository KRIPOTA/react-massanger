import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";

export function ChatListPresent(props) {
    return (
        <>
            <form onSubmit={props.handleSubmit} style={{ marginBottom: '20px', marginTop: '30px', marginLeft: '30px' }}>
                <TextField
                    id="standard-basic"
                    label="Add new chat"
                    variant="standard"
                    size="small"
                    type="text"
                    value={props.value}
                    onChange={(e) => props.setValue(e.target.value)}
                    autoFocus
                />
                <Button variant="contained" color="success" type="submit" size="small" sx={{ marginLeft: '3px', marginTop: '14px', width: '150px' }}>Create Chat</Button>
            </form>
            <h1 style={{ marginLeft: '30px' }}>ChatList </h1>
            <List>
                {props.chats.map((chat) => (
                    <ListItem sx={{
                        width: '350px',
                        display: 'flex',
                        justifyContent: 'space-between', padding: '0px',
                        marginLeft: '30px',
                    }} key={chat.id}>
                        <Box sx={{
                            display: 'flex', justifyContent: 'left', alignItems: 'center',
                            border: '1px solid grey', width: '288px', height: '48px', cursor: 'pointer', '&:hover': {
                                background: "grey",
                            }
                        }}>
                            <Link style={{
                                textDecoration: 'none', paddingLeft: '10px', paddingRight: '80%', paddingTop: '4%', paddingBottom: '5%', color: 'black'
                            }} to={`/chats/${chat.name}`}>
                                {chat.name}
                            </Link>
                        </Box>
                        <Box sx={{
                            display: 'flex', justifyContent: 'left', alignItems: 'center', borderLeft: 'none',
                            border: '1px solid grey', cursor: 'pointer', height: '48px', '&:hover': {
                                background: "red"
                            }, textAlign: 'center'
                        }} onClick={() => props.dispatch(props.deleteChat(chat.name))}>Удалить</Box>
                    </ListItem>
                ))}
            </List>
        </>
    )
}