import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  background-color: #d3d3d3;
  text-align: center;
  justify-content: center;
  margin-bottom: 50px;
  font-family: "Century Gothic", sans-serif;
  color: #0c4da2;
  margin-top: 40px;
  border-radius: 5px !important;
  box-shadow: 5px 5px 15px 4px rgba(0, 0, 0, 0.55);

  .header {
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    text-align: center;
    color: #000000;
    padding: 15px 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  span {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }

  .destaque {
    color: #9400d3;
  }

  .button-confirm {
    display: flex;
    width: 48%;
    height: 45px;
    background-color: #5cb85c;
    color: #fff;
    border: none;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 16px;
    @media(max-width: 780px) {
      width: 90%;
      margin-bottom: 10px;
    }
  }

  .button-recuse {
    display: flex;
    width: 48%;
    height: 45px;
    background-color: red;
    color: #fff;
    border: none;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 16px;
    @media(max-width: 780px) {
      width: 90%;
      margin-bottom: 10px;
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px 105px 20px 105px;
    @media(max-width: 780px) {
      width: 100%;
      flex-direction: column;
      padding: 0px !important;
      margin-top: 20px;
      justify-content: center !important;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    height: auto;
    
    span {
      font-size: 20px;
      font-family: "Roboto", sans-serif;
      color: #0c4da2;
      margin-left: 20px;
      @media(max-width: 780px) {
        margin-left: 0;
      }
    }
  }

  .buttons {
    display: flex;
    width: 40%;
    @media(max-width: 780px) {
      margin-left: -15px;
    }
  }
`;

export default Container;
