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
      "https://content2-adc-sk.adcdata.sk/images/588630/8fbtjx0_400x400.jpg",
  },
  {
    code: "D1029",
    name: "Liana Universal Mix",
    weight: 1,
    manufacturer: "Liana",
    type: "Múka",
    image:
      "https://content2-adc-sk.adcdata.sk/images/559314/zildz40_400x400.jpg",
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
      "https://content2-adc-sk.adcdata.sk/images/374458/kbhflj0_400x400.jpg",
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
      "https://content2-adc-sk.adcdata.sk/images/523139/23rkaq0_400x400.jpg",
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
