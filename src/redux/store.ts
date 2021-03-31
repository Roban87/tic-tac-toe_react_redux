import { applyMiddleware } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistedReducer from './rootReducer';

// const middlewares = [
//   getDefaultMiddleware({
//     logger,
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];
// const middlewareEnhancer = applyMiddleware(...middlewares);

// const enhancers = [middlewareEnhancer];
// const composedEnhancers = composeWithDevTools(...enhancers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    logger,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  enhancers: [composeWithDevTools()],
});

let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default { store, persistor };
