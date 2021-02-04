import { Request, Response } from 'express';
import CreateProductServices from '../services/CreateProductService';
import DeleteProductServices from '../services/DeleteProductService';
import ListProductServices from '../services/ListProductService';
import ShowProductServices from '../services/ShowProductService';
import UpdateProductServices from '../services/UpdateProductService';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = new ListProductServices();

    const products = await listProducts.execute();

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const ShowProduct = new ShowProductServices();

    const product = await ShowProduct.execute({ id });

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = new CreateProductServices();

    const product = await createProduct.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const { id } = request.params;

    const updateProduct = new UpdateProductServices();

    const product = await updateProduct.execute({
      id,
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProduct = new DeleteProductServices();

    await deleteProduct.execute({ id });

    return response.json([]);
  }
}
