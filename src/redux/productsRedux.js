/* selectors */
export const getAllProducts = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getNew = ({ products }) =>
  products.filter(item => item.newProduct === true);
export const getFeaturedProducts = ({ products }) =>
  products.filter(item => item.featured === true);
export const getProductsToCompare = ({ products }) =>
  products.filter(item => item.compare === true);
export const getHotDeals = ({ products }) => products.filter(item => item.oldPrice);
export const getFavouriteProducts = ({ products }) =>
  products.filter(item => item.favourite === true);
export const getSaleOffProducts = ({ products }) =>
  products.filter(item => item.saleOff === true);
export const getTopSellerProducts = ({ products }) =>
  products.filter(item => item.topSeller === true);
export const getProductById = ({ products }, id) =>
  products.find(product => product.id === id);
export const getSortedProducts = ({ products }, sort) => {
  const sortedProducts = [...products];
  switch (sort) {
    case 'recommended':
      sortedProducts.sort((a, b) => b.stars - a.stars);
      return sortedProducts;
    case 'priceLow':
      sortedProducts.sort((a, b) => a.price - b.price);
      return sortedProducts;
    case 'priceHigh':
      sortedProducts.sort((a, b) => b.price - a.price);
      return sortedProducts;
    case 'name':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      return sortedProducts;
    default:
      return sortedProducts;
  }
};

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_PRODUCT_FAVOURITE = createActionName('TOGGLE_PRODUCT_FAVOURITE');
const TOGGLE_PRODUCT_COMPARE = createActionName('TOGGLE_PRODUCT_COMPARE');
const ADD_MY_STARS = createActionName('ADD_MY_STARS');
const UPDATE_PRODUCT_QUANTITY = createActionName('UPDATE_PRODUCT_QUANTITY');
const ADD_REVIEW = createActionName('ADD_REVIEW');

/* action creators */
export const toggleProductFavourite = payload => ({
  type: TOGGLE_PRODUCT_FAVOURITE,
  payload,
});

export const toggleProductCompare = payload => ({
  type: TOGGLE_PRODUCT_COMPARE,
  payload,
});

export const addMyStars = payload => ({
  type: ADD_MY_STARS,
  payload,
});

export const updateProductQuantity = payload => ({
  type: UPDATE_PRODUCT_QUANTITY,
  payload,
});

export const addReview = payload => ({
  type: ADD_REVIEW,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCT_FAVOURITE:
      return statePart.map(product =>
        product.id === action.payload
          ? {
              ...product,
              favourite: !product.favourite,
            }
          : product
      );
    case TOGGLE_PRODUCT_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, compare: !product.compare }
          : product
      );
    case ADD_MY_STARS:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, myStars: action.payload.clickedStars }
          : product
      );
    case UPDATE_PRODUCT_QUANTITY:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + action.payload.quantity }
          : product
      );
    case ADD_REVIEW:
      return statePart.map(product =>
        product.id === action.payload.productId
          ? { ...product, reviews: [...(product.reviews || []), action.payload.review] }
          : product
      );
    default:
      return statePart;
  }
}
