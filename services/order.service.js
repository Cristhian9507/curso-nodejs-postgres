const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')
class OrderService {

  constructor(){
  }

  async create(data) {
    const order = await models.Order.create(data);
    return order;
  }

  async find() {
    const orders = await models.Order.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [{
        association: 'customer',
          include: ['user']
      }]
    });
    if(!order) {
      throw boom.notFound('No existe la orden');
    }
    return order;
  }

  // async update(id, changes) {
  //   const order = models.Order.findOne(id);
  //   const res = await order.update(changes);
  //   return res
  // }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;
