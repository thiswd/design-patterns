import { IndividualCar } from '../vehicle/individual-car';
import { Customer } from '../customer/customer';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { IndividualCustomer } from '../customer/individual-customer';
import { CreateVehicleCustomerFactory } from './customer-vehicle-factory';

export class IndividualCreateVehicleCustomerFactory
  implements CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
