import React from "react";
import Content from './style';
import Confirmation from '../Confirmation';

function TextInvite() {
  return (
      <Content>
        <p>O Mundo Bita está em festa!</p>
        <span>Vamos comemorar o meu <span className="destaque">segundo aninho</span> e você é o nosso convidado especial.</span>
        <Confirmation />
      </Content>
  );
}

export default TextInvite;
