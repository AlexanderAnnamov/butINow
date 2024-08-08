import React from 'react'

import { Outlet, Navigate } from 'react-router-dom'

interface IPrivateRoute {
    isAuth: boolean
}

const PrivateRoute: React.FC<IPrivateRoute> = ({isAuth}) => {
  return isAuth ? <Outlet/> : <Navigate to='/auth'/>
}

export default PrivateRoute