import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import FormDetailsProvider from "../providers/FormDetailsProvider";
import BuyCountProvider from "../providers/BuyCountProvider";

const Layout = () => {
  return (
    <>
      <FormDetailsProvider>
        <BuyCountProvider>
          {" "}
          <NavBar />
          <Outlet />
        </BuyCountProvider>
      </FormDetailsProvider>
    </>
  );
};

export default Layout;
