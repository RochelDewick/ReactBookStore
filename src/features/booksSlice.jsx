import {createSlice} from "@reduxjs/toolkit"

//initialize state
const initValue={
    books:[]
}

const booksSlice = createSlice({
  name:"books",
  initialState: initValue,
  reducers: {
    addToCart:(state,action)=>{state.books = [...state.books, action.payload]; 
      alert("👍Item has been added successfully to shopping cart!👍")
  
  },
    removeFromCart: (state,action)=>{state.books.pop(action.payload)}
  }  
});

export default booksSlice.reducer;
export const {addToCart, removeFromCart}=booksSlice.actions;