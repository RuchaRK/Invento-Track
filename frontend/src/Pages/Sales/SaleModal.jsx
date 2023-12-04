import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Model } from '../../Components/Model';
import {
  ButtonContainer,
  FormContainer,
  Input,
  Title,
  Select
} from '../../Components/Model.styles';
import { fetchAllSales } from '../../Actions/saleActions';

export const SaleModal = ({ modalIsOpen, closeModal, handleSubmit, initialState }) => {
  const [formInput, setFormInput] = React.useState(initialState ? initialState : {});
  const { loading } = useSelector((state) => state.loading);
  const inventoryItems = useSelector((state) => state.inventory);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllSales());
  }, [dispatch]);

  const saveFormDetails = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Model isOpen={modalIsOpen} onRequestClose={closeModal}>
        <FormContainer>
          <Title>New Sale</Title>
          Product:
          <Select name="product" onChange={(event) => saveFormDetails(event)}>
            {inventoryItems.map((item) => (
              <option value={item._id}> {item.name}</option>
            ))}
          </Select>
          Date:
          <Input
            type="date"
            name="date"
            value={formInput.date}
            onChange={(event) => saveFormDetails(event)}
          />
          Selling Price:
          <Input
            type="number"
            name="sellingPrice"
            value={formInput.sellingPrice}
            onChange={(event) => saveFormDetails(event)}
          />
          Quantity:
          <Input
            type="number"
            name="quantity"
            value={formInput.quantity}
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
