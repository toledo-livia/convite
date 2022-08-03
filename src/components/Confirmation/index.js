import Container from "./style";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 400,
    marginTop: "15px",
    ["@media (max-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "80%",
      flexDirection: "column !important",
      justifyContent: "center",
    },
  },
  input: {
    width: "10%",
    marginTop: "10px",
    marginRight: "5px",
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Confirmation() {
  const classes = useStyles();
  let [adultos, setAdultos] = useState(0);
  let [criancas, setCriancas] = useState(0);
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
        setName("Maria, Alexandre e Sofia");
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
      case "?antonio":
        setName("Antônio Carlos");
        return;
      default:
        setName("Theo 2 anos");
        return;
    }
  });

  const adicionarAdulto = () => {
    setAdultos(adultos + 1);
  };

  const removerAdulto = () => {
    if (adultos >= 1) {
      setAdultos(adultos - 1);
    }
  };

  const adicionarCrianca = () => {
    setCriancas(criancas + 1);
  };

  const removerCrianca = () => {
    if (adultos >= 1) {
      setCriancas(adultos - 1);
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z1ih6qp",
        "template_seafsx2",
        e.target,
        "J4uY7IbfKVIQJhP5a"
      )
      .then(
        (result) => {
          toast.success("Sua presença foi confirmada!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.error(
            "Não foi possível confirmar sua presença, tente novamente mais tarde!",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      );

    setAdultos(0);
    setCriancas(0);
  }

  return (
    <>
      <ToastContainer />
      <Container>
        <div className="header">Confirme sua presença</div>
        <div className="inputs">
          <Paper component="form" className={classes.root}>
            <span>Adultos</span>
            <div className="buttons">
              <IconButton
                className={classes.iconButton}
                onClick={() => adicionarAdulto()}
              >
                <AddCircleIcon />
              </IconButton>
              <span className={classes.input}>{adultos}</span>
              <IconButton
                className={classes.iconButton}
                onClick={() => removerAdulto()}
              >
                <RemoveCircleIcon />
              </IconButton>
            </div>
          </Paper>
          <Paper component="form" className={classes.root}>
            <span>Crianças</span>
            <div className="buttons">
              <IconButton
                className={classes.iconButton}
                onClick={() => adicionarCrianca()}
              >
                <AddCircleIcon />
              </IconButton>
              <span className={classes.input}>{criancas}</span>
              <IconButton
                className={classes.iconButton}
                onClick={() => removerCrianca()}
              >
                <RemoveCircleIcon />
              </IconButton>
            </div>
          </Paper>
        </div>
        <form
          className="content"
          id="confirmation"
          name="confirmation"
          onSubmit={sendEmail}
        >
          <input type="hidden" value={name} id="from_name" name="from_name" />
          <input
            type="hidden"
            value="toledo.livia69@gmail.com"
            id="email"
            name="email"
          />
          <input
            type="hidden"
            rows="5"
            value={
              "Confirmar a presença de " +
              adultos +
              " adultos e " +
              criancas +
              " crianças"
            }
            name="message"
            id="message"
          />
          <button className="button-confirm" type="submit" id="confirm">
            Confirmar presença
          </button>
        </form>
      </Container>
    </>
  );
}

export default Confirmation;
