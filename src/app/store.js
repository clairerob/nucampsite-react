import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';

export const store = configureStore({
  reducer: {
     campsites:  campsitesReducer,
     comments: commentsReducer,
     promotions: promotionsReducer,
     partners: partnersReducer,
  },
});
