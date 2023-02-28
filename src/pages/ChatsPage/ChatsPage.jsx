import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectMessage } from '../../store/messages/selectors'
import { ChatsPagePresent } from './ChatsPagePresent';



export function ChatsPage() {
  const { chatId } = useParams()
  const messages = useSelector(selectMessage)

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <ChatsPagePresent chatId={chatId} messages={messages} ></ChatsPagePresent>
    </>
  )
}
