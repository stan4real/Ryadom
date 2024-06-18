import { createSlice } from "@reduxjs/toolkit";
import { CatData } from "../utils/types";
const initialState: CatData = []

export const favoriteSlice = createSlice({
    name:'favorites',
    initialState,
    reducers:{
        toggleFavorites:(state, {payload})=>{
            const isExist = state.some(r => r.id=== payload.id)
            
            if(isExist){
                const index = state.findIndex(item=>item.id === payload.id)
                if(index!==-1){
                    state.splice(index,1)
                }
            } else {
                state.push(payload)
            }
        }
    }
})

export const {toggleFavorites} = favoriteSlice.actions

export default favoriteSlice.reducer