import { DeliveryFactory } from './delivery/delivery-factory';
import { deliveryContext } from './delivery/delivery-context';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Luiz', '20A', 'Av Brasil', 'Jardim das Flores', 'SP');
deliveryContext(
  factory,
  'Helena',
  '20A',
  'Av Brasil',
  'Jardim das Flores',
  'SP',
);
deliveryContext(
  factory,
  'Joana',
  '502',
  'Av Brasil',
  'Jardim das Flores',
  'SP',
);
deliveryContext(factory, 'Eliana', '2', 'Rua A', 'Jardim das Oliveiras', 'BH');
deliveryContext(factory, 'João', '501', 'Rua B', 'Jardim das Palmeiras', 'RJ');

console.log();
console.log(factory.getLocations());
