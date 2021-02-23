import { Request, Response } from 'express';
import CreateOrderServices from '../services/CreateOrderService';
import ShowOrderServices from '../services/ShowOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const ShowOrder = new ShowOrderServices();

    const order = await ShowOrder.execute({ id });

    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrder = new CreateOrderServices();

    const order = await createOrder.execute({
      customer_id,
      products,
    });

    return response.json(order);
  }
}
