import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        value: JSON.parse(localStorage.getItem("users")) || []
    },
        reducers: {
            addToUsers(state, action){
                state.value = [...state.value, action.payload]
                localStorage.setItem("users", JSON.stringify(state.value))
            },
            removeFromUsers(state, action){
                state.value = state.value.filter(user=> user.id !== action.payload.id)
            }
        }
})

export const { addToUsers, removeFromUsers } = usersSlice.actions
export default usersSlice.reducer