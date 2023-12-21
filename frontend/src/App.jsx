import { Dashboard } from './Pages/Dashboard';
import { routeName } from './App.routes';
import { PageWrapper } from './Components/PageWrapper';
import { Route, Routes } from 'react-router-dom';
import { Inventory } from './Pages/Inventory/Inventory';
import { Sales } from './Pages/Sales/Sales';
function App() {
  return (
    <>
      <PageWrapper>
        <Routes>
          <Route path={routeName.DASHBOARD} element={<Dashboard />} />
          <Route path={routeName.INVENTORY} element={<Inventory />} />
          <Route path={routeName.SALES} element={<Sales />} />
        </Routes>
      </PageWrapper>
    </>
  );
}

export default App;
