import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.BASE_URL;

function publicAsset(path, base = BASE_URL) {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
}

export default function CategoryGallery({
  category,
  title = category,
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
          .filter((file) => file.category === category)
          .map((file) => ({
            ...file,
            season: category === "DVD" ? (file.subcategory || file.path?.split("/")[2] || "기타") : category,
          }))
          .sort((a, b) =>
            (a.image || "").localeCompare(b.image || "", "ko", { numeric: true })
          );
        if (!controller.signal.aborted) setItems(dvd);
      } catch (err) {
        if (!controller.signal.aborted) setError(err.message || "목록을 불러오지 못했습니다.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadDVD();
    return () => controller.abort();
  }, [dataUrl, category]);

  const seasons = [...new Set(items.map((item) => item.season))].sort((a, b) => {
    if (a === b) return 0;
    if (a === "FINAL SEASON") return -1;
    if (b === "FINAL SEASON") return 1;
    return b.localeCompare(a, "ko", { numeric: true });
  });
  const visibleSeasons = selectedSeason === "전체" ? seasons : [selectedSeason];

  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ marginTop: 0 }}>{title}</h1>

      {loading ? (
        <p role="status">목록을 불러오는 중입니다.</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : items.length === 0 ? (
        <p>등록된 이미지가 없습니다.</p>
      ) : (
        <>
          {category === "DVD" && <nav aria-label="DVD 시즌 선택" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["전체", ...seasons].map((season) => (
              <button
                key={season}
                type="button"
                aria-pressed={selectedSeason === season}
                onClick={() => setSelectedSeason(season)}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #222",
                  borderRadius: 4,
                  background: selectedSeason === season ? "#fff100" : "#fff",
                  color: "#111",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                {season}
              </button>
            ))}
          </nav>}

          {visibleSeasons.map((season) => (
            <section key={season} aria-label={season} style={{ marginTop: 32 }}>
              {category === "DVD" && <h2>{season}</h2>}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 24 }}>
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
                      style={{ display: "block", width: "100%", height: 250, objectFit: "contain", background: "#f5f5f5" }}
                    />
                    <figcaption style={{ marginTop: 8, textAlign: "center", fontWeight: 700 }}>
                      {item.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </>
      )}
    </section>
  );
}
