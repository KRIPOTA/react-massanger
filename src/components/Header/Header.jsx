import { Outlet, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../services/firebase'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



export const navigates = [
  {
    id: 1,
    name: 'Main',
    to: '/'
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Chat',
    to: '/chats'
  },
  {
    id: 4,
    name: 'News',
    to: '/news'
  },
]

export function Header() {
  const navigate = useNavigate()
  const isAuth = useSelector((store) => store.profile.isAuth)

  const handleLogin = () => {
    navigate('/signin')
  }
  const handleSignUp = () => {
    navigate('/register')
  }
  const handleLogout = async () => {
    await logOut()
  }

  return (
    <>
      <header>
        <nav style={{ padding: '15px 0' }}>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
            {navigates.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  style={({ isActive }) => ({
                    color: isActive ? 'green' : 'blue'
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {!isAuth && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'right', marginRight: '60px' }}>
                <Button onClick={handleLogin}>login</Button>
                <Button onClick={handleSignUp}>register</Button>
              </Box>
            </>
          )}
          {isAuth && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'right', marginRight: '60px' }}>
                <Button onClick={handleLogout} color="error">logout</Button>
              </Box>
            </>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}