import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const getUser = ()=>{
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : []
}

const initialState = {
    item : getUser()
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers :{
        addUser(state,action){
            const add ={
                ...action.payload
            }
            state.item.push(add)
            toast.success("User Succesfully Added!")
            localStorage.setItem("user",JSON.stringify(state.item))
        },
        removeUser(state){
            state.item = []
            toast.success("User Removed Succesfully!")
            localStorage.removeItem("user")
        }
    }
})

export const {addUser, removeUser} = userSlice.actions
export const selectUser = (state) => state.user.item;
export default userSlice.reducer