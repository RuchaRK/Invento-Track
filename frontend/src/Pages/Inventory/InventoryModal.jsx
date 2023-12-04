import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Model } from '../../Components/Model';
import { ButtonContainer, FormContainer, Input, Title } from '../../Components/Model.styles';
import { fetchAllItems } from '../../Actions/inventoryactions';

export const InventoryModel = ({ modalIsOpen, closeModal, handleSubmit, initialState }) => {
  const [formInput, setFormInput] = React.useState(initialState ? initialState : {});
  const { loading } = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);

  const saveFormDetails = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Model isOpen={modalIsOpen} onRequestClose={closeModal}>
        <FormContainer>
          <Title>New Inventory</Title>
          Name:
          <Input
            type="text"
            name="name"
            value={formInput.name}
            onChange={(event) => saveFormDetails(event)}
          />
          Quantity:
          <Input
            type="text"
            name="quantity"
            value={formInput.quantity}
            onChange={(event) => saveFormDetails(event)}
          />
          Price:
          <Input
            type="text"
            name="price"
            value={formInput.price}
            onChange={(event) => saveFormDetails(event)}
          />
          Category:
          <Input
            type="text"
            name="category"
            value={formInput.category}
            onChange={(event) => saveFormDetails(event)}
          />
          <ButtonContainer>
            <button
              disabled={loading === 'true'}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(formInput);
                setFormInput({});
                closeModal();
              }}>
              {loading === 'true' ? 'Submitting...' : 'Submit'}
            </button>
            <button onClick={closeModal}>close</button>
          </ButtonContainer>
        </FormContainer>
      </Model>
    </div>
  );
};
