import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}
const container = createRoot(root)

container.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
