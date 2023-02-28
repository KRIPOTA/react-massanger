import { useSelector, useDispatch } from 'react-redux'
import { toggleProfile } from '../../store/profile/actions'
import { selectVisible } from '../../store/profile/selectors'
import { ProfilePagePresent } from './ProfilePagePresent';


export function ProfilePage() {
  const visible = useSelector(selectVisible)
  const dispatch = useDispatch()

  return (
    <>
      <ProfilePagePresent visible={visible} dispatch={dispatch} toggleProfile={toggleProfile}></ProfilePagePresent>
    </>
  )
}