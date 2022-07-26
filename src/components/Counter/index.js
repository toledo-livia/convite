import FlipCountdown from "@rumess/react-flip-countdown";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

function Counter() {
  return (
    <>
      <BrowserView>
        <FlipCountdown
          size="medium" // Options (Default: medium): large, medium, small, extra-small.
          endAt={"2022-08-20 19:00:00"} // Date/Time
          hideYear
          hideMonth
          dayTitle="Dias"
          hourTitle="Horas"
          minuteTitle="Minutos"
          secondTitle="Segundos"
          titlePosition="bottom"
          theme="light"
        />
      </BrowserView>
      <MobileView>
        <FlipCountdown
          size="small" // Options (Default: medium): large, medium, small, extra-small.
          endAt={"2022-08-20 19:00:00"} // Date/Time
          hideYear
          hideMonth
          dayTitle="Dias"
          hourTitle="Horas"
          minuteTitle="Min"
          secondTitle="Seg"
          titlePosition="bottom"
          theme="light"
        />
      </MobileView>
    </>
  );
}

export default Counter;
