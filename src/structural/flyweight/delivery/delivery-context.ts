import { DeliveryFactory } from './delivery-factory';

export const deliveryContext = function (
  factory: DeliveryFactory,
  name: string,
  number: string,
  street: string,
  city: string,
  neighborhood: string,
): void {
  const location = factory.makeLocation({ street, city, neighborhood });
  location.deliver(name, number);
};
