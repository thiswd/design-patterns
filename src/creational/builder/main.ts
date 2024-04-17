import { Director } from './classes/director';
import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

function clientCode(director: Director) {
  const mainDishBuilder = new MainDishBuilder();
  director.setMealBuilder(mainDishBuilder);
  director.buildMainDish();
  mainDishBuilder.makeDessert();
  console.log(mainDishBuilder.getMeal());
  console.log(mainDishBuilder.getPrice());

  const veganBuilder = new VeganDishBuilder();
  director.setMealBuilder(veganBuilder);
  director.buildMainDish();
  console.log(veganBuilder.getMeal());
  console.log(veganBuilder.getPrice());
}

const director = new Director();
clientCode(director);
