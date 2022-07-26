import styled from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    background-color: #acd8e6;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Century Gothic', sans-serif;
    margin-top: 70px;
    padding: 20px 0 30px 0;
    margin-bottom: 60px;

    h1 {
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: #007FFF;
        padding: 0;
        margin: 0;
    }

    .title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .icon {
        color: #007FFF;
        margin-right: 6px;
    }

    .info {
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: #0c4da2;
        margin-bottom: 25px;
    }
`;

export default Content;
