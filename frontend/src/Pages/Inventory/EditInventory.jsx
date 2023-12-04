import * as React from 'react';
import { useDispatch } from 'react-redux';
import { updateItems } from '../../Actions/inventoryactions';
import { BiEdit } from 'react-icons/bi';
import { InventoryModel } from './InventoryModal';

export const EditInventory = ({ objectToShow }) => {
  const dispatch = useDispatch();

  const [editModal, setEditModal] = React.useState(false);

  function openEditModal() {
    setEditModal(true);
  }

  function closeEditModal() {
    setEditModal(false);
  }

  const editDetails = (dataToUpdate) => {
    console.log(dataToUpdate);
    dispatch(updateItems({ id: dataToUpdate._id, dataToUpdate }));
  };

  return (
    <div>
      <button onClick={openEditModal}>
        <BiEdit />
      </button>
      {editModal && (
        <InventoryModel
          key={objectToShow._id}
          modalIsOpen={editModal}
          closeModal={closeEditModal}
          handleSubmit={editDetails}
          initialState={objectToShow}
        />
      )}
    </div>
  );
};
