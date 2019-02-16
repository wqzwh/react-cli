import { all } from 'redux-saga/effects'
import globalSaga from './global/sagas'

export default function * rootSaga() {
  yield all([globalSaga()])
}
