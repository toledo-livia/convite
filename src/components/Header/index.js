import React from "react";
import Header from "./style";
import Image from "../../common/images/theo.png";
import { useEffect, useState } from "react";

function Counter() {
  const [name, setName] = useState("");

  useEffect(() => {
    switch (window.location.search) {
      case "?mauro-e-yau":
        setName("Vovô Mauro e Vovó Yau");
        return;
      case "?ariane-e-igor":
        setName("Tia Ariane e Tio Ígor");
        return;
      case "?joice-e-emerson":
        setName("Tia Joice e Emerson");
        return;
      case "?dani-e-gerson":
        setName("Dani e Gerson");
        return;
      case "?monique":
        setName("Monique");
        return;
      case "?joao-e-patricia":
        setName("João Batista, Patricia e família");
        return;
      case "?maria-e-alexandre":
        setName("Maria, Alexandre e Sophia");
        return;
      case "?jose-e-gabriela":
        setName("José e Gabriela");
        return;
      case "?luana-e-helio":
        setName("Luana e Hélio");
        return;
      case "?cicero-e-cristina":
        setName("Cícero e Cristina");
        return;
      case "?lunna-e-vitor":
        setName("Lunna e Vitor");
        return;
      case "?mara-e-gabriela":
        setName("Mara, Gabriela e Manuella");
        return;
      case "?silvia-e-joao":
        setName("Vovô João, Vovó Silvia e Tio João Fernando");
        return;
      case "?maria-e-sergio":
        setName("Bisa Maria, Sérgio e família");
        return;
      case "?mislaine-e-sandrinho":
        setName("Mislane, Sandrinho e família");
        return;
      case "?henrique-e-roberta":
        setName("Henrique e Roberta");
        return;
      case "?bruno-e-patricia":
        setName("Bruno e Patrícia");
        return;
      case "?eliane-e-adilson":
        setName("Eliane e Adilson");
        return;
      case "?camila-e-livia":
        setName("Camila e Lívia Maria");
        return;
      case "?fernanda-e-hernani":
        setName("Fernanda, Hernani e Alice");
        return;
      case "?natalia-e-lucas":
        setName("Natália e Lucas");
        return;
      case "?sueli-e-herminio":
        setName("Sueli e Herminio");
        return;
      case "?natasha-e-ana":
        setName("Natasha e Ana de sempre");
        return;
      case "?fabiana-e-nando":
        setName("Fabiana e Nando");
        return;
      case "?kika-e-fabio":
        setName("Kika, Fábio e família");
        return;
      case "?dete-e-marcos":
        setName("Dete e Marcos");
        return;
      case "?nina-e-marcio":
        setName("Nina e Marcio");
        return;
      case "?priscila-e-anderson":
        setName("Priscila e Anderson");
        return;
      case "?leonardus-e-mirelle":
        setName("Leonardus, Mirelle e Angelina");
        return;
      case "?hiago-e-paloma":
        setName("Hiago e Paloma");
        return;
      case "?caio-e-carol":
        setName("Caio e Carol");
        return;
      case "?vagner-e-familia":
        setName("Vagner e família");
        return;
      case "?denise-e-julio":
        setName("Denise, Julio e André");
        return;
      case "?bruno-e-aline":
        setName("Bruno, Aline e família");
        return;
      case "?maria-e-manu":
        setName("Maria Paula e Manu");
        return;
      case "?lucas-e-manu":
        setName("Lucas e Manu");
        return;
      case "?joao-e-leticia":
        setName("João Carlos, Letícia e João Felipe");
        return;
      case "?solange-e-wilson":
        setName("Solange e Wilson");
        return;
      case "?josi":
        setName("Josi");
        return;
      case "?celio-e-sheila":
        setName("Célio e Sheila");
        return;
      default:
        setName("Theo 2 anos");
        return;
    }
  });

  return (
    <Header>
      <img src={Image} alt="theo" className="logo" />
      <div className="guest">
        <h2>Convite para {name}</h2>
      </div>
    </Header>
  );
}

export default Counter;
