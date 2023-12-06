import * as React from 'react';
import { ListPage } from '../Components/ListPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSales } from '../Actions/saleActions';
import { fetchAllItems } from '../Actions/inventoryactions';
import { Title, HeaderTextContainer } from '../Components/ListPage';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const saleItems = useSelector((state) => state.sale);
  const inventoryItems = useSelector((state) => state.inventory);

  React.useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchAllSales());
  }, [dispatch]);

  return (
    <>
      <HeaderTextContainer>
        <Title>Inventory Report</Title>

        <Title>Sales Report</Title>
      </HeaderTextContainer>
      <ListPage
        column={['Item Name', 'Revenue', 'Quantity Sold']}
        data={saleItems.map((sale) => [
          sale.product.name,
          sale.sellingPrice * sale.quantity,
          sale.quantity
        ])}
      />
    </>
  );
};
