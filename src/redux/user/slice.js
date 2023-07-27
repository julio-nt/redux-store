import { createSlice } from "@reduxjs/toolkit";
import { users } from '../../data/users'

const initialState = {
    currentUser: null,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const foundUser = users.find(user => user.email === email && user.password === password);
            if (foundUser) {
                state.currentUser = foundUser
                return alert('Logged successfully.')
            } else {
                return alert('Invalid email or password.')
            }
            // state.currentUser = foundUser || null;
        },
        logout: (state, action) => {
            state.currentUser = null;
        },
        edit: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const { login, logout, edit } = userSlice.actions

export default userSlice.reducer