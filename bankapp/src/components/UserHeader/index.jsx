import './style.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../../actions/actions.jsx'

export default function UserHeader() {
  const dispatch = useDispatch()

  const { firstName } = useSelector((state) => state.userProfile)
  const { lastName } = useSelector((state) => state.userProfile)
  const { userName } = useSelector((state) => state.userProfile) 
  const { token } = useSelector((state) => state.userLogin)
  const { success } = useSelector((state) => state.userLogin)

  const [newFirstname, setNewFirstname] = useState()
  const [newLastname, setNewLastname] = useState()
  const [newUsername, setNewUsername] = useState() 

  const [editButton, setEditButton] = useState('')

  const editNameButton = (e) => {
    e.preventDefault()
    setEditButton((current) => !current)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateProfile(token, newFirstname, newLastname, newUsername))
    if ({ success }) {
      setEditButton((current) => !current)
    }
  }

  return (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Edit user infos</h1>
          <form className="editNameContent" onSubmit={submitHandler}>
            <div className="editNameInputs">
              <div className = "nameTypeInput">
              <h3>User name</h3>
            <input
                type="text"
                placeholder={userName}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
              </div>
              <div className = "nameTypeInput">
              <h3>First name</h3>
              <input
                type="text"
                placeholder={firstName}
                onChange={(e) => setNewFirstname(e.target.value)}
                required
                disabled
              />
              </div>
              <div className = "nameTypeInput">
              <h3>Last name</h3>
              <input
                type="text"
                placeholder={lastName}
                onChange={(e) => setNewLastname(e.target.value)}
                required
                disabled
              />              
            </div>
            </div>
            <div className="editNameButtons">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" onClick={editNameButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}