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
  const [fromDate, setFromDate] = React.useState('');
  const [toDate, setToDate] = React.useState('');
  const [displayFilterData, setFilterData] = React.useState(false);

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

  const filteredData =
    fromDate && displayFilterData
      ? salesData.filter((sale) => {
          const from = new Date(fromDate).getTime();
          const to = new Date(toDate).getTime();
          return new Date(sale.date).getTime() >= from && new Date(sale.date).getTime() <= to;
        })
      : salesData;

  return (
    <>
      <ListPage
        filter={
          <>
            From :
            <input
              type="date"
              name="from"
              value={fromDate}
              onChange={(event) => setFromDate(event.target.value)}
            />
            To :
            <input
              type="date"
              name="to"
              value={toDate}
              onChange={(event) => setToDate(event.target.value)}
            />
            <button onClick={() => setFilterData(true)}>Filter</button>
            <button
              onClick={() => {
                setFilterData(false);
                setFromDate('');
                setToDate('');
              }}>
              Reset
            </button>
          </>
        }
        column={['Product', 'Date', 'Selling Price(per sale)', 'Quantity']}
        data={filteredData.map((sale) => [
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
