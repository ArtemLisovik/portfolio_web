import { configureStore } from "@reduxjs/toolkit";


// import trusteeReducer from 'containers/TrusteeList/store/TrusteeSlice'

export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch