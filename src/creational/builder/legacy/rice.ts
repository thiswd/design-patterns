import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class Rice implements MealCompositeProtocol {
  constructor(public name: string, public price: number) {}

  getPrice(): number {
    return this.price
  }
}
