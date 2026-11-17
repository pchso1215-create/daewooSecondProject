import { useEffect, useState } from "react";

import './../App.css'
import './style/dvd.css'

import bluray from './../assets/words_transparent/BLU-RAY.png'

const BASE_URL = import.meta.env.BASE_URL;

function publicAsset(path, base = BASE_URL) {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
}

export default function Dvd({
  dataUrl = publicAsset("public-files.json"),
  assetBase = BASE_URL,
}) {
  const [items, setItems] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("전체");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    setItems([]);
    setSelectedSeason("전체");

    async function loadDVD() {
      try {
        const response = await fetch(dataUrl, { signal: controller.signal });
        if (!response.ok) throw new Error(`JSON 요청 실패 (${response.status})`);
        const data = await response.json();
        if (!Array.isArray(data.files)) throw new Error("JSON의 files 목록을 확인해 주세요.");
        const dvd = data.files
          .filter((file) => file.category === "DVD")
          .map((file) => ({
            ...file,
            season: file.subcategory || file.path?.split("/")[2] || "기타",
          }))
          .sort((a, b) =>
            (a.image || "").localeCompare(b.image || "", "ko", { numeric: true })
          );
        if (!controller.signal.aborted) setItems(dvd);
      } catch (err) {
        if (!controller.signal.aborted) setError(err.message || "DVD 목록을 불러오지 못했습니다.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadDVD();
    return () => controller.abort();
  }, [dataUrl]);

  const seasons = [...new Set(items.map((item) => item.season))].sort((a, b) => {
    if (a === b) return 0;
    if (a === "FINAL SEASON") return -1;
    if (b === "FINAL SEASON") return 1;
    return b.localeCompare(a, "ko", { numeric: true });
  });
  const visibleSeasons = selectedSeason === "전체" ? seasons : [selectedSeason];

  return (
    <main className="main">
    <section className="bluray"> 
        <h2><img src={bluray} /></h2>   
          <div className="tab" aria-label="DVD 시즌 선택" >
            {["전체", ...seasons].map((season) => (
              <button
                key={season}
                type="button"
                aria-pressed={selectedSeason === season}
                onClick={() => setSelectedSeason(season)}        
                style={{ background: selectedSeason === season ? "#fff600" : "#fff"}}        
              >
                {season}
              </button>
            ))}
          </div>
          {visibleSeasons.map((season) => (
            <section key={season} aria-label={season} >
              <div  className="tabLists" >
                {items.filter((item) => item.season === season).map((item) => (
                  <figure key={item.id || item.path} style={{ margin: 0 }}>
                    <img
                      src={item.path ? publicAsset(item.path, assetBase) : item.url}
                      alt={item.description || item.title}
                      loading="lazy"
                      onError={(event) => {
                        if (item.url && event.currentTarget.getAttribute("src") !== item.url) {
                          event.currentTarget.src = item.url;
                        }
                      }}
                     
                    />
                    <figcaption>
                      <div>{item.title}</div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}     
     
    </section>
    </main>
  );
}
