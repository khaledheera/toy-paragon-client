import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes.jsx'
import AuthProvider from './Providers/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider><RouterProvider router={router}></RouterProvider>
     <Toaster
						toastOptions={{
							className: '',
							duration: 2500,
							style: {
								background: '#000000',
								color: '#fff',
							},
						}}
					/>
     </AuthProvider>
  </React.StrictMode>,
)
