import http from "../http-common";

class ProductDataService {
  getAll(limit=8, offset=0, filter='') {
    return http.get(`/product?limit=${limit}&offset=${offset}&filter=${filter}`);
  }

  get(id) {
    return http.get(`/product/${id}`);
  }

  create(data) {
    return http.post(`/product`, data);
  }

  // update(id, data) {
  //   return http.put(`/product/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/product/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/product`);
  // }

  // findByTitle(title) {
  //   return http.get(`/product?title=${title}`);
  // }
}

export default new ProductDataService();