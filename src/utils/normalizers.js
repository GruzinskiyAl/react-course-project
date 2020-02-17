import keyBy from "lodash.keyby";

export const normalizeProducts = data => {
  const dataById = keyBy(data, ({id}) => id);
  const allIds = Object.keys(dataById);
  return {
    byId: dataById,
    allIds
  };
};

export const normalizeProduct = data => {
  const {id} = data;
  const dataById = {[id]: data};
  return {
    byId: dataById,
    id
  }
};
