import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../../models/grocery.model";
import { groceryAction } from "../actions/grocery.action";

const initialState: Grocery[] = [];

export const groceryReducer = createReducer(
    initialState,
    on(groceryAction.loadGroceriesSuccess, (state, action) => {
        return action.payload; //returns array of groceries
    })
);