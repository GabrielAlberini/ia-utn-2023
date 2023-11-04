import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "60vh",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
