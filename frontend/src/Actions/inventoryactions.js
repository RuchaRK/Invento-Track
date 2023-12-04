import axios from 'axios';

export const fetchAllItems = () => async (dispatch) => {
  try {
    const response = await fetch('/api/items');
    const data = await response.json();
    dispatch({ type: 'ADD_INVENTORY_SUCCESS', payload: data.allItems });
  } catch (error) {
    dispatch({ type: 'ADD_INVENTORY_FAILURE', payload: error });
  }
};

export const addNewItem = (itemData) => async (dispatch) => {
  try {
    console.log(itemData);
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(itemData)
    });
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    dispatch({ type: 'ADD_INVENTORY_SUCCESS', payload: data.allItems });
  } catch (error) {
    dispatch({ type: 'ADD_INVENTORY_FAILURE', payload: error });
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    dispatch({ type: 'DELETE_INVENTORY_SUCCESS', payload: data.allItems });
  } catch (error) {
    dispatch({ type: 'DELETE_INVENTORY_FAILURE', payload: error });
  }
};

export const updateItems =
  ({ id, dataToUpdate }) =>
  async (dispatch) => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(dataToUpdate)
      });

      console.log(response.body);
      const data = await response.json();
      console.log('Data - ', data);
      dispatch({ type: 'UPDATE_INVENTORY_SUCCESS', payload: data.allItems });
    } catch (error) {
      dispatch({ type: 'UPDATE_INVENTORY_FAILURE', payload: error });
    }
  };
