import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    newUsers: [],
    orders: [],
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
                state.newUsers = [...state.newUsers, { ...action.payload, }]
                return alert('Account created successfully.')
            }
        },
        registerNewCard: (state, action) => {
            // const { email } = state.currentUser
            // state.newUsers = state.newUsers.map(user =>
            //     user.email === email ?
            //         { ...action.payload, ...state.currentUser, ...action.payload }
            //         : user
            // )
            // state.currentUser = { ...state.currentUser, ...action.payload }
        },
        addOrder: (state, action) => {
            const purchaseDate = new Date()
            const { email } = state.currentUser
            state.orders = [...state.orders, { email, purchaseDate, ...action.payload }]
        }
    }
})

export const { login, logout, edit, register, registerNewCard, addOrder } = userSlice.actions

export default userSlice.reducer