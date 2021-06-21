import { from, of } from 'rxjs';
import { ofType } from "redux-observable";
import { mergeMap, switchMap } from 'rxjs/operators';
import { API, graphqlOperation } from "aws-amplify";

import { listProducts } from '../../graphql/queries';
import Actions from '../actions/productsActions';

export const fetchProductsEpic = action$ =>
    action$.pipe(
        ofType(Actions.FETCH_PRODUCTS),
        switchMap(() =>
            from(API.graphql(graphqlOperation(listProducts))).pipe(
                mergeMap(response => of(Actions.fetchProductsSuccessfull(response.data.listProducts.items))))));

