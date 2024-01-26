import FormEmail from "../../components/form-email/FormEmail";
import Header from "../../components/header/Header";
import "./home.scss";
import tv from "../../assets/tv.png";
import infantil from "../../assets/infantil.png";
import tablet from "../../assets/tablet.png";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div className="container">
      <Header />
      <div>
        <div className="main">
            <h1 className="title-main">Filmes, series e muito mais, <br/> sem limites</h1>
            <h2 className="subtitle-main"> Assista onde quiser. Cancele quando quiser</h2>
            <h3>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
            <FormEmail />
        </div>
      </div>

      <div className="box-container"> 
        <div className="box-info"> 
            <div className="box-text">
            <h1 className="box-title">Aproveite na TV</h1>
            <h2 className="subtitle-main">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,<br/> aparelhos de Blu-ray e outros dispositivos.</h2>
            </div>
            <img src={tv} alt="imagem tv" className="tv"/>
        </div>

        <div className="shadow"></div>

        <div className="box-info"> 
            <img src={tablet} alt="tablet" className="tablet"/>
            <div className="box-text">
            <h1 className="box-title">Assista onde quiser</h1>
            <h2 className="subtitle-main">Assista a quantos filmes e séries quiser no celular, tablet, laptop e <br/> TV.</h2>
            </div>
        </div>

        <div className="shadow"></div>
        
        <div className="box-info"> 
            <div className="box-text">
            <h1 className="box-title">Crie perfis para <br/> crianças</h1>
            <h2 className="subtitle-main">Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</h2>
            
            </div>
            <img src={infantil} alt="imagem infantil" className="infantil"/>
        </div>

        <div className="shadow"></div>

      </div>

      <Footer />
    </div>
  );
};

export default Home;
