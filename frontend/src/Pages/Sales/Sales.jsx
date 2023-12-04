import * as React from 'react';
import { fetchAllSales, addNewSale, deleteSale } from '../../Actions/saleActions';
import { useDispatch, useSelector } from 'react-redux';
import { ListPage } from '../../Components/ListPage';
import { AiOutlineDelete } from 'react-icons/ai';
import { SaleModal } from './SaleModal';

export const Sales = () => {
  const dispatch = useDispatch();
  const salesData = useSelector((state) => state.sale);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchAllSales());
  }, [dispatch]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addSale = (newData) => {
    dispatch(addNewSale(newData));
  };

  return (
    <>
      <ListPage
        column={['Product', 'Date', 'Selling Price(per sale)', 'Quantity']}
        data={salesData.map((sale) => [
          sale.product.name,
          sale.date.split('T')[0],
          sale.sellingPrice,
          sale.quantity,

          <button key={sale._id} onClick={() => dispatch(deleteSale(sale._id))}>
            <AiOutlineDelete />
          </button>
        ])}
        title="Sales"
        description=""
        image=""
        openForm={openModal}
      />

      {modalIsOpen && (
        <SaleModal modalIsOpen={modalIsOpen} closeModal={closeModal} handleSubmit={addSale} />
      )}
    </>
  );
};
