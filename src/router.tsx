import { createHashRouter } from 'react-router-dom'
import App from './components/app/app'
import ComicsGalleryPage from './pages/comics_gallery_page/comics_gallery_page'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <ComicsGalleryPage />,
      },
    ],
  },
])
