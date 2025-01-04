# Angular 18 NGRX Pattern (component -> Actions -> Effects -> Reducers -> Store -> Selectors -> Component)
![NGRX Pattern](https://github.com/piyalidas10/NGRX-Angular/blob/777c4534582a602a4329961fd343fe3438c35bea/NGRX.png)
1. Component dispatch the action. Action is nothing than an object with type & payload.
2. Action will reach to effects. In Previous Redux pattern, we were sending actions directly to reducers which is synchronous. Now if you want to invoke the APIs which will be performed inside effects. 
3. Every success & failure action is sent to the reducer. We keep 3 sections (load, success, error) inside reducers. 
4. Reducer will return data to the store / state which is new state. State's value depends on what data returning from reducers.
5. Instead of directly consume data from store, Selectors will help to select data as per requirements. You can transform data. Suppose you have customers data in your store, you want to fetch only customers names & ids instead of all customers details. You can use selector to filter the customers data.  Selectors are MemoizedSelectors, call only one time in entire application.
6. Selectors will be consumed in component where you want to display the response.

##### Selectors
Selectors are MemoizedSelectors, call only one time in entire application

Stackbliz Link: https://stackblitz.com/~/github.com/piyalidas10/NGRX-Angular

### Angular 18 state management using NGRX - Store, Reducer, Effects, Selectors | NgRx tutorial in Hindi
https://www.youtube.com/watch?v=PvL7TULFxoE
