"use strict";

module.exports = {
  async find(ctx) {
    console.log("find", ctx);
    console.log("ctx.query", ctx.query);
    try {
      // ref plugin,service,context query
      return await strapi.plugin("demo").service("demo").find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async find2(ctx) {
    try {
      return await strapi.plugin("demo").service("demo").find2(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async delete(ctx) {
    try {
      ctx.body = await strapi
        .plugin("demo")
        .service("demo")
        .delete(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async create(ctx) {
    try {
      ctx.body = await strapi
        .plugin("demo")
        .service("demo")
        .create(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async update(ctx) {
    try {
      ctx.body = await strapi
        .plugin("demo")
        .service("demo")
        .update(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async toggle(ctx) {
    try {
      ctx.body = await strapi
        .plugin("demo")
        .service("demo")
        .toggle(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
