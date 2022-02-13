/* eslint-disable no-unused-vars */
import React, { memo } from "react";

import { Link } from "react-router-dom";

import { CardBody, Card, BoxImg } from "./styles";

import ImgTeste from "../../images/esmeralda.webp";

function CardTips({ Information }) {
  return (
    <Card>
      <Link to={`${Information.tipLink}/${Information.idDica}`}>
        <BoxImg>
          <img src={ImgTeste} alt={Information.title} />
        </BoxImg>
        <CardBody>
          <h3>{Information.title}</h3>
          <p>Leia mais...</p>
        </CardBody>
      </Link>
    </Card>
  );
}

export default memo(CardTips);
