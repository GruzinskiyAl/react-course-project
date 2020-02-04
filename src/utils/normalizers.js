import keyBy from "lodash.keyby";

export const normalizeProducts = function (data) {
  const dataById = keyBy(data, ({ id }) => id);
  const allIds = Object.keys(dataById);
  return {
    byId: dataById,
    allIds
  };
};

export const normalizeBasketItem = function (data) {
  return {
    byId: data,
    allIds: [...Object.keys(data)]
  }
}
