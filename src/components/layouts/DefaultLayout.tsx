import { Outlet } from "react-router-dom";
import { NavMenu } from "../Nav/NavMenu";

export function DefaultLayout() {
  return (
    <>
      <NavMenu  />
      <Outlet />
    </>
  )
}