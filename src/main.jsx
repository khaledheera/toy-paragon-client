import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes.jsx'
import AuthProvider from './Providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
		<HelmetProvider><RouterProvider router={router}></RouterProvider></HelmetProvider>
		
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
