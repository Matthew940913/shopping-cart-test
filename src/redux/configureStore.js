import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools} from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const middlewares = [thunkMiddleware]
    const store = createStore(
      persistedReducer,
      composeWithDevTools(
        applyMiddleware(...middlewares)
      )
    )

    const persistor = persistStore(store)
  
    return { store, persistor }
}