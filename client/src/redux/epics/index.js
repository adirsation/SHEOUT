import { combineEpics } from 'redux-observable';

import * as productsEpics from './productsEpics';
import * as purchaseEpic from './purchaseEpic';

export default combineEpics(
    ...Object.values({
        ...productsEpics,
        ...purchaseEpic
      })
)
