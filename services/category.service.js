const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class CategoryService {

  constructor(){
  }

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const res = models.Category.findAll({
      include: ['products']
    })
    return res;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products']
    });
    if(!category) {
      throw boom.notFound('Category no encontrado');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const res = await category.update(changes);
    return res;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id };
  }

}

module.exports = CategoryService;
