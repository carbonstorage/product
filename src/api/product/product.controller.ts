import { Request, Response } from "express";
import Controller from "../../decorators/RouteDecorators/controller.decorator";
import { Get, Post } from "../../decorators/RouteDecorators/handlers.decorator";
import ProductService from "./product.service";

@Controller("/api/products")
export default class ProductController {
  private productService;

  constructor() {
    this.productService = new ProductService();
  }

  @Get("")
  public async getProducts(req: Request, res: Response) {
    return this.productService.getProduct(req, res);
  }

  @Get("/:id")
  public async getProductById(req: Request, res: Response) {
    return this.productService.getProductById(req, res);
  }

  @Post("")
  public async createProduct(req: Request, res: Response) {
    return this.productService.createProduct(req, res);
  }
}
