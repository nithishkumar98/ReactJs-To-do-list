import { createStore, applyMiddleware  } from "redux";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

    export  const store = createStore(
      persistedReducer,
      composeWithDevTools(applyMiddleware(thunk))
      )

     export const persistor = persistStore(store);

