export const fetchAllSales = () => async (dispatch) => {
  try {
    const response = await fetch('/api/sales');
    const data = await response.json();
    dispatch({ type: 'ADD_SALE_SUCCESS', payload: data.sales });
  } catch (error) {
    dispatch({ type: 'ADD_SALE_FAILURE', payload: error });
  }
};

export const addNewSale = (itemData) => async (dispatch) => {
  try {
    console.log(itemData);
    const response = await fetch('/api/sales', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(itemData)
    });
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    dispatch({ type: 'GET_SALE_SUCCESS', payload: data.sales });
  } catch (error) {
    dispatch({ type: 'GET_SALE_FAILURE', payload: error });
  }
};

export const deleteSale = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/sales/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    dispatch({ type: 'DELETE_SALE_SUCCESS', payload: data.sales });
  } catch (error) {
    dispatch({ type: 'DELETE_SALE_FAILURE', payload: error });
  }
};
