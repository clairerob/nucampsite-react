import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
     campsites:  campsitesReducer,
     comments: commentsReducer,
     promotions: promotionsReducer,
     partners: partnersReducer,
     user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
