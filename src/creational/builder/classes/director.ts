import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';

export class Director {
  private _builder: MealBuilderProtocol | null = null;

  setMealBuilder(builder: MealBuilderProtocol): void {
    this._builder = builder;
  }

  buildMainDish(): void {
    this._builder?.makeMeal().makeBeverage();
  }
}
