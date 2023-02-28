import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export function MessageList({ messages }) {
  return (
    <>
      <h1 style={{ marginLeft: '30px' }}>MessageList</h1>
      <List>
        {messages.map((message, index) => (
          <ListItem sx={{
            marginLeft: '17px'
          }} key={index}>
            {message.author} : {message.text}
          </ListItem>
        ))}
      </List>
    </>
  )
}
