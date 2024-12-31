import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Grocery } from "../../models/grocery.model";

// export const loadGroceries = createAction(
//     '[Grocery] Load Groceries'
// );

// export const loadGroceriesSuccess = createAction(
//     '[Grocery] Load Groceries Success',
//     props<{ goceries: Grocery[] }>()
// );

// export const loadGroceriesFailure = createAction(
//     '[Grocery] Load Groceries Failure'
// );

/*
source is the value of square brackets([Grocery]). It's a covention which we are following.
*/
export const groceryAction = createActionGroup({
    source: 'Grocery',
    events: {
        'Load Groceries': emptyProps(), // no payload for props
        'Load Groceries Success': props<{ payload: Grocery[] }>(),
        'Load Groceries Failure': emptyProps()
    }
})