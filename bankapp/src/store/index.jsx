import { legacy_createStore, combineReducers,applyMiddleware,compose } from 'redux'
import { userReducer } from '../reducers/userReducer'
import { loginReducer } from "../reducers/loginReducer.jsx"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
)

export const persistor = persistStore(store)
export default store