import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default function Layout({ children }) {
  return (
    <div className="h-screen relative">
      <Header />
      <main className="public-page-wrap pt-192 xs:pt-120">{children}</main>
      <Footer />
    </div>
  );
}
