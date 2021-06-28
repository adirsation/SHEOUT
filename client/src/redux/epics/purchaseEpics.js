import { from, of } from 'rxjs';
import { ofType } from "redux-observable";
import { mergeMap, switchMap, pluck, catchError } from 'rxjs/operators';
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listPurchases } from '../../graphql/customQueries';
import { onCreatePurchase } from '../../graphql/subscriptions';
import Actions from '../actions/index';

export const submitOrderEpic = action$ =>
    action$.pipe(
        ofType(Actions.SUBMIT_ORDER),
        pluck('payload'),
        switchMap(products => from(API.post('orderApi', '/order', { body: products })).pipe(
            mergeMap(() => of(Actions.submitOrderSuccessfull())))));

export const fetchPurchasesEpic = action$ =>
    action$.pipe(
        ofType(Actions.FETCH_PURCHASES),
        switchMap(() =>
            from(API.graphql(graphqlOperation(listPurchases))).pipe(
                mergeMap(response => of(Actions.fetchPurchasesSuccessfull(response.data.listPurchases.items))))));

export const subscribeToOrderEpic = action$ =>
    action$.pipe(
        ofType(Actions.SUBSCRIBE_TO_ORDERS),
        switchMap(() =>
            from(Auth.currentAuthenticatedUser()).pipe(
                switchMap((user) =>
                    from(API.graphql(graphqlOperation(onCreatePurchase, { owner: user.username }))).pipe(
                        mergeMap(() => of(Actions.orderSubmitted())),
                        catchError(error => of(Actions.orderFailed(error)))
                    )
                )
            )
        )
    )