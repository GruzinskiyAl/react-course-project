import keyBy from "lodash.keyby";

export const normalizeProducts = data => {
  const dataById = keyBy(data.items, ({id}) => id);
  const allIds = Object.keys(dataById);
  return {
    byId: dataById,
    totalItems: data.totalItems,
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
  const page = data?.page && !isNaN(data.page) && parseInt(data.page);
  const perPage = data?.perPage && !isNaN(data.perPage) && parseInt(data.perPage);

  return {
    origins,
    minPrice,
    maxPrice,
    page,
    perPage
  }
};
