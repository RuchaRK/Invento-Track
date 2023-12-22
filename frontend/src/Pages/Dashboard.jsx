import * as React from 'react';
import { ListPage } from '../Components/ListPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSales } from '../Actions/saleActions';
import { fetchAllItems } from '../Actions/inventoryactions';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  display: flex;

  gap: 12px;
  color: #ca2c92;
  padding: 32px 44px;
`;

const ReportContainer = styled.div``;

export const Dashboard = () => {
  const dispatch = useDispatch();
  const saleItems = useSelector((state) => state.sale);
  const inventoryItems = useSelector((state) => state.inventory);
  const [report, setReport] = React.useState('inventory');

  React.useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchAllSales());
  }, [dispatch]);

  return (
    <>
      <HeaderContainer>
        <button
          onClick={() => setReport('inventory')}
          style={
            report === 'inventory'
              ? {
                  borderColor: '#ca2c92',
                  color: '#ca2c92'
                }
              : {}
          }>
          Get Inventory Report
        </button>

        <button
          onClick={() => setReport('sales')}
          style={
            report === 'sales'
              ? {
                  borderColor: '#ca2c92',
                  color: '#ca2c92'
                }
              : {}
          }>
          Get Sales Report
        </button>
      </HeaderContainer>
      <ReportContainer>
        {report.length > 0 && report === 'sales' ? (
          <ListPage
            column={['Item Name', 'Revenue', 'Quantity Sold']}
            data={saleItems.map((sale) => [
              sale.product.name,
              sale.sellingPrice * sale.quantity,
              sale.quantity
            ])}
          />
        ) : (
          <ListPage
            column={['Item Name', 'Quantity', 'Category']}
            data={inventoryItems.map((item) => [item.name, item.quantity, item.category])}
          />
        )}
      </ReportContainer>
    </>
  );
};
