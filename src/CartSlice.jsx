import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // This will store our plant objects: { name, image, cost, quantity }
  },
  reducers: {
    // Adds a plant to the cart or increments quantity if it already exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    
    // Removes an item from the cart based on its name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    // Updates the quantity of a specific item (used for + and - buttons)
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export the actions to be used in ProductList.jsx and CartItem.jsx
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in the Redux store
export default CartSlice.reducer;
