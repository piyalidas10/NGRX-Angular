import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Grocery } from '../../models/grocery.model';

/* 
    select all groceries
    ------------------------------------------------    
    export const selectGroceries = (state:{groceries: Grocery[]}) => state.groceries;
    same as the bellow
*/
// we have two FeatureSelectors 1. groceries 2. buckets which is mentioned in app.config with provideStore
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');


/*  
********** select fruit type groceries only **********
Selectors are MemoizedSelectors, call only one time in entire application
export const selectGroceriesByTypeFruit = createSelector(
    selectGroceries,
    (state) => {
        return state.filter(item => item.type === 'fruit');
    }
)
*/

export const selectGroceriesByType = (type: string) => createSelector(
    selectGroceries,
    (state) => {
        return state.filter(item => item.type === type);
    }
);