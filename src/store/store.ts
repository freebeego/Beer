import { configureStore } from '@reduxjs/toolkit'

import beerReducer, { beerSlice } from '@store/beer/slice'

const store = configureStore({
  reducer: {
    [beerSlice.name]: beerReducer,
  },
})

export default store
