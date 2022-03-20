/* eslint-disable no-unused-vars */
import React, { memo } from "react";

import { Link } from "react-router-dom";

import { CardBody, Card, BoxImg } from "./styles";

function CardTips({ Information }) {
  return (
    <Card>
      <Link to={`${Information.tipLink}/${Information.idDica}`}>
        <BoxImg>
          <img src={Information.TipImgP} alt={Information.title} />
        </BoxImg>
      </Link>
    </Card>
  );
}

export default memo(CardTips);
