import Content from './style';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import Map from "../Map";

function Date() {
  return (
      <Content>
        <div className="title">
            <CalendarMonthIcon className="icon"/>
            <h1>Quando?</h1>
        </div>
        <span className="info">Sábado, 20 de agosto de 2022</span>
        <div className="title">
            <PlaceIcon className="icon"/>
            <h1>Local</h1>
        </div>
        <span className="info">Estrada Prof. Nair da Soledade Spinelli, 2231, Mantiqueira (Recanto Majoe)</span>
        <Map />
      </Content>
  );
}

export default Date;
