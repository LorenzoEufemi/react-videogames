import App from "../App";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
    <AppHeader />
    <div className="bg-warning-subtle">
    <Outlet  />
    </div>
    <AppFooter />
    </>
  );
}

export default AppLayout;