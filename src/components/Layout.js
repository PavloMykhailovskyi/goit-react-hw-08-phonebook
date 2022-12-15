import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import  ButtonAppBar  from "./AppBar/AppBar"

export const Layout = () => {
    return (
      <div>
        <ButtonAppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    );
}