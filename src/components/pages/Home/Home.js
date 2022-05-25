import SearchBar from '../../layout/SearchBar/SearchBar';
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import CardProduto from "./Produto/CardProduto";
import Carrossel from "./Carrossel/Carrossel";

function Home() {
    return (
        <div>
            <SearchBar />
            <Navbar />
            <Carrossel/>
            <CardProduto titulo = "Produtos Mais Vendidos"/>
            <CardProduto titulo = "Últimas Novidades"/>
            <Footer />
        </div>
    );
}

export default Home;