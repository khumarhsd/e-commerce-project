import { Outlet, Navigate } from "react-router"

const PrivateRoute = ({auth}) => {
  return (
    <>
    {auth? <Outlet /> : <Navigate to={'/login'} />}
    </>
  )
}

export default PrivateRoute