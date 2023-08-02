import { createSlice } from "@reduxjs/toolkit";
// import { users } from '../../data/users'

const initialState = {
    currentUser: null,
    newUsers: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const foundUser = state.newUsers.find(user => user.email === email && user.password === password);
            if (foundUser) {
                state.currentUser = foundUser
                return alert('Logged successfully.')
            } else {
                return alert('Invalid email or password.')
            }
        },
        logout: (state, action) => {
            state.currentUser = null;
        },
        edit: (state, action) => {
            const { email, password, id } = state.currentUser
            state.newUsers = state.newUsers.map(user =>
                user.email === email ?
                    { ...action.payload, password, id }
                    : user
            )
            state.currentUser = { ...action.payload, password, id }
        },
        register: (state, action) => {
            const { email } = action.payload
            const userAlreadyExists = state.newUsers.find(user => user.email === email);
            if (userAlreadyExists) {
                return alert('A user with this email already exists.')
            } else {
                state.newUsers = [...state.newUsers, { ...action.payload }]
                return alert('Account created successfully.')
            }

        }
    }
})

export const { login, logout, edit, register } = userSlice.actions

export default userSlice.reducer