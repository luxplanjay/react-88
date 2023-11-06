import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';

// const myMiddleware1 = store => {
//   return next => {
//     return action => {
//       console.log('myMiddleware1: ', action);
//       next(action);
//     };
//   };
// };

const myMiddleware1 = store => next => action => {
  // console.log('myMiddleware1: ', action);
  next(action);
};

const myMiddlware2 = store => next => action => {
  // console.log('myMiddleware2: ', action);
  next(action);
};

const gaMd = store => next => action => {
  if (action?.meta?.ga) {
    console.log('Send to GA', action);
    // GA.send(action);
  }

  next(action);
};

export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
  },
  middleware(getDefaultMiddleware) {
    const defaultMiddleware = getDefaultMiddleware();
    return [...defaultMiddleware, myMiddleware1, myMiddlware2, gaMd];
  },
});
