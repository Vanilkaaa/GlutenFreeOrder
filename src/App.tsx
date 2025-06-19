import { useState, useEffect } from "react";
import "./styles.css";

type Product = {
  code: string;
  name: string;
  weight: number;
  manufacturer: string;
  type: string;
  image: string;
};

const products: Product[] = [
 {
    code: "D1403",
    name: "Mix For Flour",
    weight: 1,
    manufacturer: "Balviten",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/485488/006oeu0_400x400.jpg",
  },
  {
    code: "D0195",
    name: "APROMIX- PLUS NÍZKOBIELKOVINOVÁ MÚKA",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/564712/5eve7w0_400x400.jpg",
  },
  {
    code: "D0193",
    name: "APROMIX-T PLUS NÍZKOBIELKOVINOVÁ MÚKA TMAVÁ",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/767780/rvxrsr0_400x400.jpg",
  },
  {
    code: "D1401",
    name: "Balviten MIX For BREAD",
    weight: 1,
    manufacturer: "Balviten",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/207349/a4n9fb0_400x400.jpg",
  },
  {
    code: "D0977",
    name: "Liana Fine Mix",
    weight: 0.3,
    manufacturer: "Liana",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/588630/86pzdz0_400x400.jpg",
  },
  {
    code: "D1029",
    name: "Liana Universal Mix",
    weight: 1,
    manufacturer: "Liana",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/559314/jbcw4t0_400x400.jpg",
  },
  {
    code: "D0175",
    name: "KRUPICA BEZLEPKOVÁ",
    weight: 0.5,
    manufacturer: "Novalim",
    type: "Iné",
    image:
      "https://content2-adc-sk.adcdata.sk/images/380162/63r9ea0_400x400.jpg",
  },
  {
    code: "D0973",
    name: "Liana Bakery mix",
    weight: 1,
    manufacturer: "Liana",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/374458/84hwr90_400x400.jpg",
  },
  {
    code: "D1031",
    name: "Liana Bread mix dark",
    weight: 1,
    manufacturer: "Liana",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/566802/lwhz200_400x400.jpg",
  },
  {
    code: "D1030",
    name: "Liana Bread mix white",
    weight: 1,
    manufacturer: "Liana",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/319317/5cb8650_400x400.jpg",
  },
  {
    code: "D0976",
    name: "Liana Cake Mix",
    weight: 1,
    manufacturer: "Liana",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/523139/yu3rxt0_400x400.jpg",
  },
  {
    code: "D1226",
    name: "Schär MIX IT Universal múka",
    weight: 1,
    manufacturer: "Schar",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/637378/anxr7o0_400x400.jpg",
  },
  {
    code: "D0657",
    name: "Schär MIX IT Dunkel múka",
    weight: 1,
    manufacturer: "Schar",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/793297/bzzdun0_400x400.jpg",
  },
  {
    code: "D1073",
    name: "Schär Mix C Patisserie múčna zmes",
    weight: 1,
    manufacturer: "Schar",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/270330/eagvlh0_400x400.jpg",
  },
  {
    code: "D0298",
    name: "Schär MIX B BREAD múčna zmes",
    weight: 1,
    manufacturer: "Schar",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/862118/adi1l50_400x400.jpg",
  },
  {
    code: "D0174",
    name: " APROMIX NÍZKOBIELKOVINOVÁ MÚKA",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/925943/hp9mm20_400x400.jpg",
  },
  {
    code: "D1402",
    name: "Mix For Cake",
    weight: 1,
    manufacturer: "Balviten",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/112493/k8od8x0_400x400.jpg",
  },
  {
    code: "D1072",
    name: "Mehl Farine -múčna zmes bezgluténová univerzálna",
    weight: 1,
    manufacturer: "Schar",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/819223/0p6cv30_400x400.jpg",
  },
  {
    code: "D1404",
    name: "Mix Free Univerzal",
    weight: 0.5,
    manufacturer: "Balviten",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/400272/kjgv320_400x400.jpg",
  },
  {
    code: "D0170",
    name: "PROMIX®CH, bezgluténová múčna zmes na chlieb",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/438576/inb5c20_400x400.jpg",
  },
  {
    code: "D0685",
    name: "JIZERKA Univerzálna - prirodzene bezlepková zmes",
    weight: 1,
    manufacturer: "Jizerka",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/177008/1s5spt0_400x400.jpg",
  },
  {
    code: "D0865",
    name: "MEVALIA – BREAD MIX",
    weight: 0.5,
    manufacturer: "Nestlé",
    type: "Múka",
    image:
      "https://shop.mevalia.de/309-large_default/bake-mix.jpg",
  },
  {
    code: "D1518",
    name: "MLYN TRENČAN Odvážny hrášok - HRACHOVÁ KRUPICA",
    weight: 0.5,
    manufacturer: "Mlyn Trenčan",
    type: "Iné",
    image:
      "https://content2-adc-sk.adcdata.sk/images/279241/bg3ckk0_400x400.jpg",
  },
  {
    code: "D1492",
    name: "MLYN TRENČAN Odvážny hrášok - HRACHOVÁ MÚKA",
    weight: 0.5,
    manufacturer: "Mlyn Trenčan",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/452210/hisljp0_400x400.jpg",
  },
  {
    code: "D1155",
    name: "MLYN TRENČAN Pohánková krupica",
    weight: 0.5,
    manufacturer: "Mlyn Trenčan",
    type: "Iné",
    image:
      "https://content2-adc-sk.adcdata.sk/images/601030/aebrmg0_400x400.jpg",
  },
  {
    code: "D1154",
    name: "MLYN TRENČAN Pohánková múka hladká",
    weight: 0.5,
    manufacturer: "Mlyn Trenčan",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/293959/7hnlfl0_400x400.jpg",
  },
    {
    code: "D1074",
    name: "NutriFree Mix per Pane Integrale",
    weight: 1,
    manufacturer: "NutriFree",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/363959/exm6lf0_400x400.jpg",
  },
    {
    code: "D0974",
    name: "NutriFree Mix per Pane",
    weight: 1,
    manufacturer: "NutriFree",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/692086/011j6l0_400x400.jpg",
  },
    {
    code: "D0872",
    name: "PROMIX Alfa",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/830805/yp55hi0_400x400.jpg",
  },
    {
    code: "D0873",
    name: "PROMIX Beta",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/698870/y4odqw0_400x400.jpg",
  },
    {
    code: "D0408",
    name: "PROMIX-CH špeciál, múčna zmes na bezlepkový chlieb",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/731221/xokmcy0_400x400.jpg",
  },
    {
    code: "D0194",
    name: "PROMIX-FORTE, silná bezlepková múka",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/819059/p0nicd0_400x400.jpg",
  },
    {
    code: "D0407",
    name: "PROMIX-PK špeciál, zmes na bezlepkové jemné pečivo",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/765233/vusbuo0_400x400.jpg",
  },
    {
    code: "D0171",
    name: "PROMIX-PK zmes na bezlepkové pečivo",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/825783/xkbav60_400x400.jpg",
  },
      {
    code: "D0173",
    name: "PROMIX-T, univerzálna bezlepková múka tmavá",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/246185/2xcu6b0_400x400.jpg",
  },
      {
    code: "D0337",
    name: "PROMIX-UNI komfort bezlep.zmes pre autom. pečenie",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/717562/48ga6f0_400x400.jpg",
  },
      {
    code: "D0172",
    name: "PROMIX-UNI, univerzálna bezlepková múka",
    weight: 1,
    manufacturer: "Novalim",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/990938/tu0rlm0_400x400.jpg",
  },
        {
    code: "D0664",
    name: "Schär FUSILLI cestoviny",
    weight: 0.25,
    manufacturer: "Schar",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/337497/noxavr0_400x400.jpg",
  },
        {
    code: "D0663",
    name: "Schär PENNE cestoviny",
    weight: 0.25,
    manufacturer: "Schar",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/438462/1dturn0_400x400.jpg",
  },
          {
    code: "D0662",
    name: "Schär SPAGHETTI cestoviny",
    weight: 0.25,
    manufacturer: "Schar",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/832235/a87znq0_400x400.jpg",
  },
            {
    code: "D0181",
    name: "APROCEL - NÍZKOBIELK. CESTOVINY - niťovky",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/499179/rsk7320_400x400.jpg",
  }, 
              {
    code: "D0869",
    name: "MEVALIA - DITALI",
    weight: 0.5,
    manufacturer: "Nestlé",
    type: "Cestoviny",
    image:
      "https://bezlepka.sk/wp-content/uploads/2019/03/mevalia-ditali.jpg",
  },
              {
    code: "D0871",
    name: " MEVALIA - FUSILLI",
    weight: 0.5,
    manufacturer: "Nestlé",
    type: "Cestoviny",
    image:
      "https://www.pkushop.cz/fotky53911/fotos/_vyr_300_20141103_pack_fusilli.png",
  },
              {
    code: "D0870",
    name: "MEVALIA - PENNE",
    weight: 0.5,
    manufacturer: "Nestlé",
    type: "Cestoviny",
    image:
      "https://www.pkushop.cz/fotky53911/fotos/_vyr_308_20141103_pack_penne.png",
  },
              {
    code: "D0180",
    name: "PROCEL - BEZLEPKOVÉ CESTOVINY, ČÍSLICE",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/941159/5u6lcy0_400x400.jpg",
  },
              {
    code: "D0180",
    name: "PROCEL - BEZLEPKOVÉ CESTOVINY, FLIAČKY - MALÉ",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/703726/6sayo90_400x400.jpg",
  },
              {
    code: "D0180",
    name: "PROCEL - BEZLEPKOVÉ CESTOVINY, FLIAČKY - VEĽKÉ",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/446858/o843900_400x400.jpg",
  },
              {
    code: "D0180",
    name: "PROCEL - BEZLEPKOVÉ CESTOVINY, KOLIENKA - MALÉ",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/763669/l1z7fu0_400x400.jpg",
  },
                {
    code: "D0180",
    name: "PROCEL - BEZLEPKOVÉ CESTOVINY, KOLIENKA - VEĽKÉ",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/238833/f40la30_400x400.jpg",
  },
                {
    code: "D0180",
    name: "PROCEL - BEZLEPKOVÉ CESTOVINY, NIŤOVKY",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/100001/elwhu80_400x400.jpg",
  },
                {
    code: "D0180",
    name: "PROCEL - BEZLEPKOVÉ CESTOVINY, REZANCE",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/613441/ae28wg0_400x400.jpg",
  },
                {
    code: "D0180",
    name: "PROCEL - BEZLEPKOVÉ CESTOVINY, ŠPAGETY",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/443574/v46fuf0_400x400.jpg",
  },
                {
    code: "D0180",
    name: "PROCEL - BEZLEPKOVÉ CESTOVINY, ŠPIRÁLY",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/276430/cjaypj0_400x400.jpg",
  },
                {
    code: "D0180",
    name: "PROCEL - BEZLEPKOVÉ CESTOVINY, TARHOŇA",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Cestoviny",
    image:
      "https://content2-adc-sk.adcdata.sk/images/346525/p6xdql0_400x400.jpg",
  },
                {
    code: "D0338",
    name: "BEZLEPKOVÉ TYČINKY S POHÁNKOU, EXTRUDOVANÝ VÝROBOK",
    weight: 0.085,
    manufacturer: "Novalim",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/827405/tan7td0_400x400.jpg",
  },
                  {
    code: "D0185",
    name: "CHLIEB BEZLEPKOVÝ SVETLÝ (TRVANLIVÝ)",
    weight: 0.36,
    manufacturer: "Novalim",
    type: "Pekárenské výrobky",
    image:
      "https://www.vitalmix.cz/buxus/images/cache/fotogaleria-lightbox/fotogaleria/katalog_produktov/chlieb_bezlepkovy_tmavy_trvanlivy_1x360_g/jfmvqr0.jpg",
  },
                  {
    code: "D0251",
    name: "CHLIEB BEZLEPKOVÝ TMAVÝ (TRVANLIVÝ)",
    weight: 0.36,
    manufacturer: "Novalim",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/286996/jfmvqr0_400x400.jpg",
  },
                    {
    code: "D0339",
    name: "HVIEZDIČKY BEZLEPKOVÉ, EXTRUDOVANÝ VÝROBOK",
    weight: 0.1,
    manufacturer: "Novalim",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/754061/ooes6r0_400x400.jpg",
  },
                      {
    code: "D1280",
    name: "Liana Rolls mix",
    weight: 0.5,
    manufacturer: "Liana",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/257269/aiawqp0_400x400.jpg",
  },
                      {
    code: "D0874",
    name: "LINSI - bezgluténový chlieb s ľanom",
    weight: 0.3,
    manufacturer: "Novalim",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/615584/zh8d620_400x400.jpg",
  },
                        {
    code: "D0866",
    name: "MEVALIA - FROLINI",
    weight: 0.2,
    manufacturer: "Nestlé",
    type: "Pekárenské výrobky",
    image:
      "https://www.pkushop.cz/fotky53911/fotos/_vyr_298_20141001_pack_frollini_biscotti.png",
  },
                          {
    code: "D0182",
    name: "NÍZKOBIELKOVINOVÉ OBLÁTKY",
    weight: 0.1,
    manufacturer: "Novalim",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/600896/s89osu0_400x400.jpg",
  },
                            {
    code: "D0877",
    name: "NOVALIM Buchty - bezgluténové parené s lekvárom",
    weight: 0.32,
    manufacturer: "Novalim",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/507919/adjetr0_400x400.jpg",
  },
                              {
    code: "D0876",
    name: "NOVALIM Knedľa - bezgluténová parená",
    weight: 0.32,
    manufacturer: "Novalim",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/910284/2f9hba0_400x400.jpg",
  },
                                {
    code: "D0979",
    name: "NutriFree Panfette",
    weight: 0.34,
    manufacturer: "NutriFree",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/820387/t07lcl0_400x400.jpg",
  },
                                {
    code: "D0978",
    name: "NutriFree Panfette integrale",
    weight: 0.34,
    manufacturer: "NutriFree",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/516017/di3njl0_400x400.jpg",
  },
                                {
    code: "D0293",
    name: "Schär BON MATIN žemle",
    weight: 0.2,
    manufacturer: "Schar",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/571450/nvgm890_400x400.jpg",
  },
                                {
    code: "D0661",
    name: "Schär CIABATTA RUSTICA žemle",
    weight: 0.2,
    manufacturer: "Schar",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/184988/jvjguk0_400x400.jpg",
  },
                                {
    code: "D0660",
    name: "Schär CIABATTA žemle",
    weight: 0.2,
    manufacturer: "Schar",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/818000/fce0j50_400x400.jpg",
  },
                                  {
    code: "D0941",
    name: "Schär MAESTRO CEREALE chlieb",
    weight: 0.3,
    manufacturer: "Schar",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/799161/uu10160_400x400.jpg",
  },
                                  {
    code: "D0940",
    name: "Schär MAESTRO CLASSIC chlieb",
    weight: 0.3,
    manufacturer: "Schar",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/505318/rzzd4f0_400x400.jpg",
  },
                                  {
    code: "D0939",
    name: "Schär MAESTRO VITAL chlieb",
    weight: 0.35,
    manufacturer: "Schar",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/154941/h4f81s0_400x400.jpg",
  },
                                    {
    code: "D0479",
    name: "Schär PAIN Campagnard chlieb",
    weight: 0.24,
    manufacturer: "Schar",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/189010/cmbd4b0_400x400.jpg",
  },
                                    {
    code: "D0658",
    name: "Schär Pan Gratí (Paniermehl) strúhanka",
    weight: 0.3,
    manufacturer: "Schar",
    type: "Strúhanka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/698990/z8g0o60_400x400.jpg",
  },
                                    {
    code: "D0296",
    name: "Schär QUADRITOS oblátky",
    weight: 0.04,
    manufacturer: "Schar",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/531283/w0lits0_400x400.jpg",
  },
                                    {
    code: "D0297",
    name: "Schär SALINIS praclíky",
    weight: 0.06,
    manufacturer: "Schar",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/228189/7sok750_400x400.jpg",
  },
                                    {
    code: "D0875",
    name: "Schär ŽEMLE HAMBURGER",
    weight: 0.3,
    manufacturer: "Schar",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/288260/5qdf730_400x400.jpg",
  },
                                    {
    code: "D0254",
    name: "STRÚHANKA BEZLEPKOVÁ PEČIVOVÁ",
    weight: 0.35,
    manufacturer: "Novalim",
    type: "Strúhanka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/625349/gg9qqo0_400x400.jpg",
  },
                                      {
    code: "D0340",
    name: "MüSLI BEZLEPKOVE GRANULOVANÉ",
    weight: 0.2,
    manufacturer: "Novalim",
    type: "Müsli",
    image:
      "https://content2-adc-sk.adcdata.sk/images/735625/hajnm80_400x400.jpg",
  },
                                        {
    code: "D0942",
    name: "Schär Fruit Müsli",
    weight: 0.375,
    manufacturer: "Schar",
    type: "Müsli",
    image:
      "https://content2-adc-sk.adcdata.sk/images/691941/evvt9i0_400x400.jpg",
  },
                                          {
    code: "D0272",
    name: "KNEDĽA BEZLEPKOVÁ V PRÁŠKU",
    weight: 0.25,
    manufacturer: "Novalim",
    type: "Zmesy v prášku",
    image:
      "https://content2-adc-sk.adcdata.sk/images/119973/8mtwaw0_400x400.jpg",
  },
                                            {
    code: "D0335",
    name: "MUFFINY BEZLEPKOVÉ V PRÁŠKU",
    weight: 0.3,
    manufacturer: "Novalim",
    type: "Zmesy v prášku",
    image:
      "https://content2-adc-sk.adcdata.sk/images/664404/gl7dvn0_400x400.jpg",
  },
                                            {
    code: "D1104",
    name: "NOVALIM Halušky bezgluténové v prášku",
    weight: 0.3,
    manufacturer: "Novalim",
    type: "Zmesy v prášku",
    image:
      "https://content2-adc-sk.adcdata.sk/images/457357/2mc4gn0_400x400.jpg",
  },
                                      {
    code: "D0253",
    name: "LIMKY DIÉTNE KEKSY KAKAOVÉ",
    weight: 0.15,
    manufacturer: "Novalim",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/149379/ikhpn10_400x400.jpg",
  },

                                      {
    code: "D0252",
    name: "LIMKY DIÉTNE KEKSY VANILKOVÉ",
    weight: 0.15,
    manufacturer: "Novalim",
    type: "Pekárenské výrobky",
    image:
      "https://content2-adc-sk.adcdata.sk/images/307184/w88zsy0_400x400.jpg",
  },
];

type PatientData = {
  rc: string;
  tc: string;
  name: string;
  insurer: string;
};

type SelectedItem = {
  weight: number;
  quantity: number;
};

export default function GlutenFreeOrder() {
  const [selectedItems, setSelectedItems] = useState<Record<string, SelectedItem>>({});
  const [emailTemplate, setEmailTemplate] = useState(
    `Dobrý deň,

Prosím vás predpísať recept na bezlepkové potraviny:

{{orderList}}

Kontakt: 
Poistovňa: 
Rodné Číslo: 
Meno a Priezvisko: 

Ďakujem.`
  );
  const [manufacturerFilter, setManufacturerFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [patientData, setPatientData] = useState<PatientData>({
    rc: "",
    tc: "",
    name: "",
    insurer: "",
  });

  // Načítanie údajov z localStorage pri mountnutí komponentu
  useEffect(() => {
    const savedRc = localStorage.getItem("rc") || "";
    const savedTc = localStorage.getItem("tc") || "";
    const savedName = localStorage.getItem("name") || "";
    const savedInsurer = localStorage.getItem("insurer") || "";
    setPatientData({
      rc: savedRc,
      tc: savedTc,
      name: savedName,
      insurer: savedInsurer,
    });
  }, []);

  const handlePatientDataChange = (field: keyof PatientData, value: string) => {
    setPatientData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSavePatientData = () => {
    localStorage.setItem("rc", patientData.rc);
    localStorage.setItem("tc", patientData.tc);
    localStorage.setItem("name", patientData.name);
    localStorage.setItem("insurer", patientData.insurer);

    setEmailTemplate((prev) =>
      prev
        .replace(/Rodné Číslo:.*\n/, `Rodné Číslo: ${patientData.rc}\n`)
        .replace(/Kontakt:.*\n/, `Kontakt: ${patientData.tc}\n`)
        .replace(/Meno a Priezvisko:.*\n/, `Meno a Priezvisko: ${patientData.name}\n`)
        .replace(/Poistovňa:.*\n/, `Poistovňa: ${patientData.insurer}\n`)
    );
  };

  const handleResetPatientData = () => {
    setPatientData({ rc: "", tc: "", name: "", insurer: "" });
    localStorage.removeItem("rc");
    localStorage.removeItem("tc");
    localStorage.removeItem("name");
    localStorage.removeItem("insurer");
    setEmailTemplate((prev) =>
      prev
        .replace(/Rodné Číslo:.*\n/, "Rodné Číslo: \n")
        .replace(/Kontakt:.*\n/, "Kontakt: \n")
        .replace(/Meno a Priezvisko:.*\n/, "Meno a Priezvisko: \n")
        .replace(/Poistovňa:.*\n/, "Poistovňa: \n")
    );
  };

  const totalWeight = Object.values(selectedItems).reduce(
    (sum, item) => sum + item.weight * item.quantity,
    0
  );
  const weightLimit = 12;

  const handleSelect = (code: string, weight: number, quantity: number) => {
    setSelectedItems((prev) => {
      const newItems = { ...prev };
      if (quantity > 0) {
        newItems[code] = { weight, quantity };
      } else {
        delete newItems[code];
      }
      return newItems;
    });
  };

  const generateEmail = () => {
    const orderList = Object.entries(selectedItems)
      .map(([code, item]) => {
        const product = products.find((p) => p.code === code);
        if (!product) return "";
        const totalWeight = product.weight * item.quantity;
        const unit = totalWeight < 1 ? "gram" : "kg";
        const weightInUnit = totalWeight < 1 ? totalWeight * 1000 : totalWeight;
        return `${product.code} - ${item.quantity}x ${product.name} (${weightInUnit} ${unit})`;
      })
      .filter(Boolean)
      .join("\n");

    const emailBody = emailTemplate
      .replace("{{orderList}}", orderList)
      .replace(/Rodné Číslo:.*\n/, `Rodné Číslo: ${patientData.rc}\n`)
      .replace(/Kontakt:.*\n/, `Kontakt: ${patientData.tc}\n`)
      .replace(/Meno a Priezvisko:.*\n/, `Meno a Priezvisko: ${patientData.name}\n`)
      .replace(/Poistovňa:.*\n/, `Poistovňa: ${patientData.insurer}\n`);

    const subject = "Recept na bezlepkové potraviny";
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
      window.location.href = mailtoLink;
    } else {
      window.open(gmailLink, "_blank");
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesManufacturer = manufacturerFilter
      ? product.manufacturer === manufacturerFilter
      : true;
    const matchesType = typeFilter ? product.type === typeFilter : true;
    return matchesManufacturer && matchesType;
  });

  return (
    <div className="container">
      <h1>Objednávka Bezlepkových Potravín</h1>

      <div className="section">
        <h3>Údaje pacienta</h3>
        <div
          style={{
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "1fr 1fr",
            maxWidth: 600,
            margin: "0 auto 20px",
          }}
        >
          <input
            type="text"
            placeholder="Rodné číslo"
            value={patientData.rc}
            onChange={(e) => handlePatientDataChange("rc", e.target.value)}
            style={{
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 14,
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <input
            type="text"
            placeholder="Telefónne číslo"
            value={patientData.tc}
            onChange={(e) => handlePatientDataChange("tc", e.target.value)}
            style={{
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 14,
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <input
            type="text"
            placeholder="Meno a priezvisko"
            value={patientData.name}
            onChange={(e) => handlePatientDataChange("name", e.target.value)}
            style={{
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 14,
              gridColumn: "span 2",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <input
            type="text"
            placeholder="Poistovňa"
            value={patientData.insurer}
            onChange={(e) => handlePatientDataChange("insurer", e.target.value)}
            style={{
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 14,
              gridColumn: "span 2",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <div style={{ gridColumn: "span 2", display: "flex", gap: 10 }}>
            <button
              className="send-button"
              style={{ flex: 1 }}
              onClick={handleSavePatientData}
            >
              Uložiť údaje
            </button>
            <button
              className="send-button"
              style={{ flex: 1 }}
              onClick={handleResetPatientData}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <h3>Filter</h3>
      <div className="filters">
        <select
          className="filter-select"
          value={manufacturerFilter}
          onChange={(e) => setManufacturerFilter(e.target.value)}
        >
          <option value="">Všetci výrobcovia</option>
          {Array.from(new Set(products.map((p) => p.manufacturer))).map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">Všetky typy</option>
          {Array.from(new Set(products.map((p) => p.type))).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.map((product) => (
        <div key={product.code} className="product-item">
          <input
            type="checkbox"
            checked={!!selectedItems[product.code]}
            onChange={(e) =>
              handleSelect(
                product.code,
                product.weight,
                e.target.checked ? 1 : 0
              )
            }
          />
          <span
            onClick={() =>
              setSelectedImage(
                selectedImage === product.image ? null : product.image
              )
            }
            className="product-name"
          >
            {product.name} - {product.manufacturer} ({product.weight}kg)
          </span>
          {selectedItems[product.code] && (
            <input
              type="number"
              min={1}
              className="quantity-input"
              value={selectedItems[product.code]?.quantity || ""}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "") {
                  setSelectedItems((prev) => ({
                    ...prev,
                    [product.code]: {
                      weight: product.weight,
                      quantity: 0,
                    },
                  }));
                } else {
                  handleSelect(
                    product.code,
                    product.weight,
                    parseInt(value) || 0
                  );
                }
              }}
            />
          )}
        </div>
      ))}

      <div className="total-weight">
        Celkové množstvo: {totalWeight.toFixed(2)}kg / {weightLimit}kg
      </div>

      <div className="selected-items">
        <h2>Vybrané položky:</h2>
        <ul>
          {Object.entries(selectedItems).map(([code, item]) => {
            const product = products.find((p) => p.code === code);
            if (!product) return null;
            return (
              <li key={code}>
                {product.name} - {item.quantity}x ({product.weight}kg)
              </li>
            );
          })}
        </ul>
      </div>

      <textarea
        className="email-template"
        style={{ display: "block", margin: "20px auto", width: "80%" }}
        rows={6}
        value={emailTemplate}
        onChange={(e) => setEmailTemplate(e.target.value)}
      />

      <button
        className="send-button"
        onClick={generateEmail}
        disabled={totalWeight > weightLimit}
      >
        Pošli recept doktorovi
      </button>

      {selectedImage && (
        <div className="image-popup" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Produkt" />
        </div>
      )}
    </div>
  );
}
