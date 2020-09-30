import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositores/types';

import { load } from './repositores/sagas';

export default function* rootSage() {
    return yield all([
        takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
    ]);
}
