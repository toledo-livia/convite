import Header from './style';
import Image from "../../common/images/theo.png"; 

function Counter() {
  return (
    <Header>
      <img src={Image} alt="theo" className="logo" />
      <div className="guest">
        <h2>Convite para o vovô Mauro e vovó Yau</h2>
      </div>
    </Header>
  );
}

export default Counter;
