import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat } from '../../store/messages/actions'
import { selectChat } from '../../store/messages/selectors'
import { ChatListPresent } from "./ChatListPresent";
import { set } from 'firebase/database'
import { chatsRef } from '../../services/firebase'

export function ChatList({ chatDB }) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const chats = useSelector(selectChat,
    (prev, next) => prev.length === next.length)


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addChat(value))
    set(chatsRef, {
      ...chatDB,
      [value]: {
        name: value
      }
    })
  }

  return (
    <>
      <ChatListPresent handleSubmit={handleSubmit} setValue={setValue} chats={chats} dispatch={dispatch} value={value} deleteChat={deleteChat}></ChatListPresent>
    </>
  )
}