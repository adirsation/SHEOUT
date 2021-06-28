import { combineEpics } from 'redux-observable';

import * as productsEpics from './productsEpics';
import * as purchaseEpics from './purchaseEpics';

export default combineEpics(
    ...Object.values({
        ...productsEpics,
        ...purchaseEpics
      })
)
