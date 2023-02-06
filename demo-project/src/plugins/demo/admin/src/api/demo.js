import { request } from "@strapi/helper-plugin";

const demoRequests = {
  getAllDemos: async () => {
    return await request("/demo/find", {
      method: "GET",
    });
  },
  getAllDemos2: async () => {
    return await request("/demo/find2", {
      method: "GET",
    });
  },

  addDemo: async (data) => {
    return await request("/demo/create", {
      method: "POST",
      body: { data },
    });
  },

  toggleDemo: async (id) => {
    return await request(`/demo/toggle/${id}`, {
      method: "PUT",
      body: { data },
    });
  },
};

export default demoRequests;
