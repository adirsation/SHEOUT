import { from, of } from 'rxjs';
import { ofType } from "redux-observable";
import { mergeMap, switchMap, pluck } from 'rxjs/operators';
import { API } from "aws-amplify";
import Actions from '../actions/index';

export const submitOrderEpic = action$ =>
    action$.pipe(
        ofType(Actions.SUBMIT_ORDER),
        pluck('payload'),
        switchMap(products => from(API.post('orderApi', '/order', { body: products})).pipe(
                mergeMap(() => of(Actions.submitOrderSuccessfull())))));