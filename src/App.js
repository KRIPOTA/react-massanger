import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage/MainPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { NewsPage } from './pages/NewsPage/NewsPage'
import { ChatList } from './components/ChatList/ChatList'
import { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { auth } from './store/profile/actions'
import { firebaseAuth, chatsRef } from './services/firebase'
import { onValue } from "firebase/database";
import { Register } from './pages/Register/Register'
import { PrivateRoute } from './utils/PriviteRoute'
import { PublicRoute } from './utils/PublicRoute'
import { SignIn } from './pages/SignIn/SignIn'

export function App() {
  const dispatch = useDispatch()
  const [chatDB, setChatDB] = useState({})
  const [chats, setChats] = useState([])

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(auth(true))
      } else {
        dispatch(auth(false))
      }
    })
    return unsubscribe
  })

  useEffect(() => {
    onValue(chatsRef, (snapshot) => {
      const data = snapshot.val()

      const newChats = Object.entries(data).map((item) => ({
        name: item[0],
        message: item[1].messageList
      }))

      setChatDB(data)
      setChats(newChats)
    })
  }, [])


  return (
    <>
      {/* <Provider store={store}> */}
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="chats" element={<PrivateRoute />}>
              <Route
                index
                element={<ChatList chats={chats} chatDB={chatDB} />}
              />
              <Route
                path=":chatId"
                element={<ChatsPage chats={chats} chatDB={chatDB} />}
              />
            </Route>
            <Route path="news" element={<NewsPage />} />
            <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="*" element={<h2>404 Page not FOUND</h2>} />
        </Routes>
      </PersistGate>
    </>
  )
}