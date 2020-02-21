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

export const normalizeFilters = data => {
  const origins = data?.origins && (typeof data.origins === 'string'? [data.origins]: [...data.origins]);
  const minPrice = data?.minPrice && !isNaN(data.minPrice) && parseInt(data.minPrice);
  const maxPrice = data?.maxPrice && !isNaN(data.maxPrice) && parseInt(data.maxPrice);

  return {
    origins,
    minPrice,
    maxPrice
  }
};
