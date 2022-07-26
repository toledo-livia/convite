import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  img {
    width: 30%;
    margin-top: 40px;
    margin-bottom: 50px;
    @media(max-width: 780px) {
      width: 60%;
      margin-bottom: 40px;
    }
  }

  .guest {
    display: flex;
    width: 95%;
    background-color: #acd8e6;
    text-align: center;
    justify-content: center;
    margin-bottom: 50px;
    font-family: 'Century Gothic', sans-serif;
    color: #0c4da2;
  }
`;

export default Header;
