import { combineEpics } from 'redux-observable';

import * as productsEpics from './productsEpics';

export default combineEpics(
    ...Object.values({
        ...productsEpics
      })
)
