"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CropForm({ children }) {
  const [checkboxValue, setCheckboxValue] = useState([]);
  const [nitrogen, setNitrogen] = useState("");
  const [potassium, setPotassium] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [phlevel, setPhlevel] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [recommendCrop, setRecommendCrop] = useState("");

  return (
    <div className="grid p-fluid">
      <div className="col-12">
        <div className="card">
          <h4>Crop Selection</h4>
          <div className="grid p-fluid pt-4">
            <div className="col-12 md:col-6">
              <h5>Nitrogen</h5>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-star"></i>
                </span>
                <input
                  placeholder="Nitrogen"
                  value={nitrogen}
                  onChange={(e) => setNitrogen(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 md:col-6">
              <h5>Phosphorus</h5>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-star"></i>
                </span>
                <input
                  placeholder="Phosphorus"
                  value={phosphorus}
                  onChange={(e) => setPhosphorus(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 md:col-6">
              <h5>Potassium</h5>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-star"></i>
                </span>
                <input
                  placeholder="Potassium"
                  value={potassium}
                  onChange={(e) => setPotassium(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 md:col-6">
              <h5>PH Level</h5>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-star"></i>
                </span>
                <input
                  placeholder="PH Level"
                  value={phlevel}
                  onChange={(e) => setPhlevel(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 md:col-6">
              <h5>Temperature</h5>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-sun"></i>
                </span>
                <input
                  placeholder="Temperature"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 md:col-6">
              <h5>Humidity</h5>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-globe"></i>
                </span>
                <input
                  placeholder="Humidity"
                  value={humidity}
                  onChange={(e) => setHumidity(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 md:col-6">
              <h5>Rainfall</h5>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-cloud"></i>
                </span>
                <input
                  placeholder="Rainfall"
                  value={rainfall}
                  onChange={(e) => setRainfall(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-6 md:col-6 pt-4">
            <button
              label="Submit Data"
              onClick={(e) => {
                e.preventDefault();
              }}
              className="mr-2 mb-2"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
