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
            state.currentUser = foundUser || null;
        }
    }
})

export const { login } = userSlice.actions

export default userSlice.reducer