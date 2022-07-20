import FlipCountdown from "@rumess/react-flip-countdown";

function Counter() {
    return (
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
    );
}

export default Counter;