const faker = require('faker');
const boom = require('@hapi/boom');

// const sequelize = require('./../libs/sequelize');
const { models } = require('./../libs/sequelize');
class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = models.Product.create(data, {
      include: ['category']
    })
    return newProduct;
  }

  async find() {
    const product = models.Product.findAll({
      include: ['category']
    });
    return product;
  }

  async findOne(id) {
    const product = models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = models.Product.findOne(id);
    const res = await product.update(changes);
    return res;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id }
  }

}

module.exports = ProductsService;
