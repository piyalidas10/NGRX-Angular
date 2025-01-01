import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { GroceryService } from '../../grocery.service';
import { groceryAction } from '../actions/grocery.action';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GroceryEffects {
  constructor(private actions$: Actions, private groceryService: GroceryService, private toastr: ToastrService) {}

  // can use switchMap in replacement of exhaustMap

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(groceryAction.loadGroceries),
        exhaustMap(() => this.groceryService.fetchAllGroceries()
          .pipe(
            tap((groceries: any) => {
              console.log('groceries => ', groceries);
              this.toastr.success('Groceries found', 'Success', {
                timeOut: 3000,
              });
            }),
            map((groceries: any) => (groceryAction.loadGroceriesSuccess({payload: groceries}))),
            catchError(() => of(groceryAction.loadGroceriesFailure()))
          ))
    );
  });
}