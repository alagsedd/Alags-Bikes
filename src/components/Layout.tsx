import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import FormDetailsProvider from "../providers/FormDetailsProvider";

const Layout = () => {
  return (
    <>
      <FormDetailsProvider>
        {" "}
        <NavBar />
        <Outlet />
      </FormDetailsProvider>
    </>
  );
};

export default Layout;
