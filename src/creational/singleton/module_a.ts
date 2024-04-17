import { MyDatabaseFunction } from './db/my-database-function';

const myDatabase = MyDatabaseFunction;
myDatabase.add({ name: 'Luiz', age: 30 });
myDatabase.add({ name: 'Maria', age: 50 });
myDatabase.add({ name: 'Eduardo', age: 25 });

export { myDatabase };
