import { Form } from '../../components/Form/Form'
import { MessageList } from '../../components/MessageList/MessageList'
import { ChatList } from '../../components/ChatList/ChatList'
import Box from '@mui/material/Box';



export function ChatsPagePresent(props) {
    return (
        <>
            <h1 style={{ marginLeft: '30px' }}>Welcome to chat!</h1>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ChatList />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '600px', marginLeft: '-300px' }}>
                    <Form />
                    <MessageList messages={props.chatId ? props.messages[props.chatId] : []} />
                </Box>
            </Box>
        </>
    )
}