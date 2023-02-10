import { Request, Response } from "express";
import logger from "../../lib/logger";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class ProductService {
  public async getProduct(req: Request, res: Response) {
    const allProducts = await prisma.product.findMany();
    res.status(200).json({ products: allProducts });
  }

  public async getProductById(req: Request, res: Response) {
    return res.send(`${req.params.id} route`);
  }

  public async createProduct(req: Request, res: Response) {
    const product = await prisma.product.create({
      data: req.body,
    });
    logger.info(`Created product id: ${product.id}`);

    res.status(200).json({ product });
  }
}
