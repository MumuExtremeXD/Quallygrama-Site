/* eslint-disable eqeqeq */
import React from "react";

import { useParams } from "react-router-dom";

import data from "../../data/tipsData";
import { CardTip, TipImg, TipInfo } from "./styles";
function TipEsmelda() {
  const { id } = useParams();

  const filterTipId = data.filter((i) => i.idDica == id);

  return (
    <>
      {filterTipId
        ? filterTipId?.map((Data2) => (
            <CardTip key={Data2.idDica}>
              <TipImg>
                <img src={""} alt="" />
              </TipImg>

              <TipInfo>
                <h2>{id}</h2>

                <h3>{Data2.title}</h3>
                <p>{Data2.description1}</p>
              </TipInfo>
            </CardTip>
          ))
        : false}
    </>
  );
}

export default TipEsmelda;
