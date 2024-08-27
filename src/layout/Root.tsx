import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      <p>footer</p>
    </>
  );
};
export default Root;
