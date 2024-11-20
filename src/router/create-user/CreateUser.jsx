import React, {useState} from 'react'
import "./CreateUser.css"
import { useDispatch } from 'react-redux'
import { addToUsers } from '../../context/usersSlice'

function CreateUser() {
  const [name, setName] = useState("")
  const [profession, setProfession] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e)=>{
    e.preventDefault()
      let newUser = {
        id: new Date().getTime(),
        name,
        profession,
        age: +age,
        gender
    }
    dispatch(addToUsers(newUser))
    setName("")
    setProfession("")
    setAge("")
    setGender("")
  }
  

  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form className='create__user-form' action="" onSubmit={handleSubmit}>
        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='name' required/>
        <input value={profession} onChange={(e)=> setProfession(e.target.value)} type="text" placeholder='profession' required/>
        <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder='age' required/>
        <select value={gender} onChange={(e)=>setGender(e.target.value)} name="" id="" required>
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser