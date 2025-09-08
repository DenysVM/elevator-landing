import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Products from '@/pages/Products';
import Projects from '@/pages/Projects';
import Certifications from '@/pages/Certifications';
import Contact from '@/pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'products', element: <Products /> },
      { path: 'projects', element: <Projects /> },
      { path: 'certifications', element: <Certifications /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
]);
