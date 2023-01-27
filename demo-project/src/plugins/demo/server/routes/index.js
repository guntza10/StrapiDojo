module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  // define route
  {
    method: "GET",
    path: "/find",
    handler: "demo.find",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/create",
    handler: "demo.create",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "demo.delete",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "PUT",
    path: "/toggle/:id",
    handler: "demo.toggle",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "PUT",
    path: "/update/:id",
    handler: "demo.update",
    config: {
      policies: [],
      auth: false,
    },
  },
];
