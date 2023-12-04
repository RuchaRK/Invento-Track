import * as React from 'react';
import { fetchAllItems, deleteItem, addNewItem } from '../../Actions/inventoryactions';
import { useDispatch, useSelector } from 'react-redux';
import { ListPage } from '../../Components/ListPage';
import { EditInventory } from './EditInventory';
import { AiOutlineDelete } from 'react-icons/ai';
import { InventoryModel } from './InventoryModal';

export const Inventory = () => {
  const dispatch = useDispatch();
  const inventoryItems = useSelector((state) => state.inventory);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addInventory = (newData) => {
    dispatch(addNewItem(newData));
  };

  return (
    <>
      <ListPage
        column={['Name', 'Quantity', 'Cost Price(per item)', 'Category']}
        data={inventoryItems.map((item) => [
          item.name,
          item.quantity,
          item.price,
          item.category,
          <EditInventory key={item._id} objectToShow={item} />,
          <button key={item._id} onClick={() => dispatch(deleteItem(item._id))}>
            <AiOutlineDelete />
          </button>
        ])}
        title="Inventory"
        description=""
        image=""
        openForm={openModal}
      />

      {modalIsOpen && (
        <InventoryModel
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleSubmit={addInventory}
        />
      )}
    </>
  );
};
