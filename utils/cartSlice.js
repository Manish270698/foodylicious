import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    // actions
    addItem: (state, action) => {
      const item = action.payload; // Destructure itemName from payload

      // Check if the item already exists (optional for updating count)
      if (state.items[item.card.info.name]) {
        state.items[item.card.info.name].count += 1; // Increment count for existing item
      } else {
        state.items[item.card.info.name] = { itemData: item, count: 1 };
      }
      console.log(current(state));
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.items[item.card.info.name].count -= 1;
      // remove item whose count becomes 0
      if (state.items[item.card.info.name].count === 0) {
        delete state.items[item.card.info.name];
      }
      console.log(state);
    },
    clearCart: (state, action) => {
      state.items = {};
      console.log(state);
    },
  },
});

// export actions and reducers
export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
