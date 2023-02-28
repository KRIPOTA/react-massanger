import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessageWithReply } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'
import { AUTHOR } from '../../constants';
import { FormPresent } from './FormPresent';
import { push } from "firebase/database";
import { getMessageListById } from '../../services/firebase'


export function Form() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const { chatId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMessageWithReply(chatId, {
      author: AUTHOR.user,
      text
    }))
    push(getMessageListById(chatId), {
      author: AUTHOR.user,
      text
    })
    setText('')
  }

  return (
    <>
      <FormPresent handleSubmit={handleSubmit} text={text} setText={setText}></FormPresent>
    </>
  )
}