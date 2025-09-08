import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <Container as="main" py={{ base: 8, md: 12 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
