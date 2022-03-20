/* eslint-disable import/no-anonymous-default-export */

import plantioP from "../images/plantioP.webp";
import cuidadosP from "../images/cuidadosP.webp";
import fertilizantesP from "../images/fertilizantesP.webp";

import plantio1 from "../images/plantio.webp";
import plantio2 from "../images/plantio2.webp";

import cuidados1 from "../images/cuidados.webp";
import cuidados2 from "../images/cuidados2.webp";

import fertilizantes1 from "../images/fertilizantes.webp";
import fertilizantes2 from "../images/fertilizantes2.webp";

export default [
  {
    idDica: 3,
    title: "Fertilizantes",
    description1:
      "Podemos classificar como fertilizantes com formulação de plantio, como o NPK (04-14-08) e o de cobertura como o NPK (20-05-20).",

    description2:
      "As dosagens variam em torno de 25 a 30 gramas por metro quadrado. O uso de adubadeiras é fundamental para uma distribuição uniforme. Logo após a aplicação, irrigar generosamente para promover a dissolvição do fertilizante.",

    finalConsiderations1: "BBBBBBBBBBBBBBBB",
    finalConsiderations2: "BBBBBBBBBBBBBBBB",

    TipImgP: `${fertilizantesP}`,
    TipImg1: `${fertilizantes1}`,
    TipImg2: `${fertilizantes2}`,
    tipLink: "/dicas",
  },

  {
    idDica: 2,
    title: "Cuidados com a Grama",
    description1:
      "Além das adubações, a poda é uma das atividades mais importantes do processo de condução do gramado, pois ela é um dos pontos que definem a coloração e sobrevivência do gramado. A frequência de poda é definida em função do ritmo de crescimento do gramado, onde o objetivo é sempre cortar as pontas das folhas, mantendo o gramado com a coloração verde e induzindo o fechamento lateral. Quanto se retira mais do que 30% da área foliar do gramado em um único corte, este passa por um stress, perdendo parte do sistema radicular e consumindo suas reservas de carboidratos para se recompor. ",

    description2:
      "Gramados em locais sujeitos a sombreamentos, devem ser podados altos, de forma a potencializar a fotossíntese com uma maior área foliar. Cada grama tem a sua altura de poda chamada de altura confortável. Atenção, em locais sujeitos a sombreamento, podar sempre no limite da maior altura.",

    finalConsiderations1: "BBBBBBBBBBBBBBBB",
    finalConsiderations2: "BBBBBBBBBBBBBBBB",

    TipImgP: `${cuidadosP}`,
    TipImg1: `${cuidados1}`,
    TipImg2: `${cuidados2}`,
    tipLink: "/dicas",
  },

  {
    idDica: 1,
    title: "Plantio da grama",
    description1:
      "Após o bom preparo do solo com um bom nivelamento, sem pontos de acúmulo de água, incorporação de corretivos e fertilizantes, devemos aplicar as placas de grama, bem comprimidas uma as outras de forma a não deixar espaços entre placas.",

    description2:
      "Conforme formos fazendo o plantio, uma irrigação suave é conveniente para evitarmos a desidratação dos tapetes. Após a irrigação promover a compactação das placas com um rolo ou com a improvisação de um soquete para promover o contato íntimo do solo base com o solo do tapete.Neste início as irrigações devem ser suaves e frequentes até o pegamento da grama. ",

    finalConsiderations1: "BBBBBBBBBBBBBBBB",
    finalConsiderations2: "BBBBBBBBBBBBBBBB",

    TipImgP: `${plantioP}`,
    TipImg1: `${plantio1}`,
    TipImg2: `${plantio2}`,
    tipLink: "/dicas",
  },
];
