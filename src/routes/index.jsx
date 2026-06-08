import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { SaibaMais } from "../pages/saiba-mais/saiba-mais";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Carrinho } from "../pages/carrinho/carrinho";
import { CarrinhoProvider } from "../contexts/CarrinhoProvider";

export default function AppRoutes() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saiba-mais/:categoria/:id" element={<SaibaMais />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CarrinhoProvider>
  );
}
