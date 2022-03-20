/* eslint-disable no-unused-vars */
import React, { memo } from "react";

import { Link } from "react-router-dom";

import { CardBody, Card, BoxImg } from "./styles";

function CardProd({ Information }) {
  return (
    <Card>
      <Link to={`${Information.ProdLink}/${Information.idGrama}`}>
        <BoxImg>
          <img src={Information.imgP} alt={Information.title} />
        </BoxImg>
      </Link>
    </Card>
  );
}

export default memo(CardProd);
