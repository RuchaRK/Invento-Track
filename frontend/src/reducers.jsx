const initialState = { inventory: [], sale: [], loading: false, error: null };

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INVENTORY_SUCCESS':
      return {
        ...state,
        inventory: action.payload,
        loading: false,
        error: null
      };
    case 'ADD_INVENTORY_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while adding new inventory details,please try again.'
      };

    case 'GET_INVENTORY_SUCCESS':
      return {
        ...state,
        inventory: action.payload,
        loading: false,
        error: null
      };

    case 'GET_INVENTORY_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while fetching the inventory list,please try again.'
      };
    case 'DELETE_INVENTORY_SUCCESS':
      return {
        ...state,
        inventory: action.payload,
        loading: false,
        error: null
      };
    case 'DELETE_INVENTORY_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while deleting the inventory details,please try again.'
      };
    case 'UPDATE_INVENTORY_SUCCESS':
      return {
        ...state,
        inventory: action.payload,
        loading: false,
        error: null
      };
    case 'UPDATE_INVENTORY_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while updating the inventory details,please try again.'
      };

    case 'ADD_SALE_SUCCESS':
      return {
        ...state,
        sale: action.payload,
        loading: false,
        error: null
      };
    case 'ADD_SALE_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while adding new inventory details,please try again.'
      };

    case 'GET_SALE_SUCCESS':
      return {
        ...state,
        sale: action.payload,
        loading: false,
        error: null
      };

    case 'GET_SALE_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while fetching the inventory list,please try again.'
      };
    case 'DELETE_SALE_SUCCESS':
      return {
        ...state,
        sale: action.payload,
        loading: false,
        error: null
      };
    case 'DELETE_SALE_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error while deleting the inventory details,please try again.'
      };

    default:
      return state;
  }
};
