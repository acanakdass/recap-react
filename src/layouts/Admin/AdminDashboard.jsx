import React from 'react'
import { Outlet } from 'react-router'

function AdminDashboard() {
   return (
      <div>
         <h1>Admin Dashboard</h1>
         <div>
            <Outlet />
         </div>
      </div>
   )
}

export default AdminDashboard
