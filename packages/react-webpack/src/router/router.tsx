import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>123</div>,
  }
])

export default () => <RouterProvider router={router} />