import { from, of } from 'rxjs';
import { ofType } from "redux-observable";
import { mergeMap, switchMap } from 'rxjs/operators';
import { API } from "aws-amplify";
import Actions from '../actions/index';

export const submitOrderEpic = action$ =>
    action$.pipe(
        ofType(Actions.SUBMIT_ORDER),
        switchMap(action => from(action.payload).pipe(
            products => from(API.post('order', '/', { body: products })).pipe(
                mergeMap(() => of(Actions.submitOrderSuccessfull()))))));