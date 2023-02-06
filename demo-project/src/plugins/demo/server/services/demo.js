"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    /*
        access entity service (method findMany,delete,create,update,findOne)
        - first param => plugin::<name_plugin>.<name_service>
        - second param => query
        Note: entityService เอาไว้ get data จาก db
     */
    return await strapi.entityService.findMany("plugin::demo.demo", query);
  },
  async find2(query) {
    return await strapi.entityService.findMany("api::category.category", query);
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::demo.demo", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::demo.demo", data);
  },

  async update(id, data) {
    return await strapi.entityService.update("plugin::demo.demo", id, data);
  },

  async toggle(id) {
    const result = await strapi.entityService.findOne("plugin::demo.demo", id);
    return await strapi.entityService.update("plugin::demo.demo", id, {
      data: { isDone: !result.isDone },
    });
  },
});
