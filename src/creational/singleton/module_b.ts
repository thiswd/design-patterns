import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabase as myDatabaseFromModuleA } from './module_a';

const myDatabase = MyDatabaseFunction;
myDatabase.add({ name: 'Roberto', age: 30 });
myDatabase.add({ name: 'Joana', age: 50 });
myDatabase.add({ name: 'Luíza', age: 25 });
myDatabase.show();

console.log(myDatabase === myDatabaseFromModuleA);
