import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface ServiceArea {
  name: string;
  lat: number;
  lng: number;
  primary?: boolean;
}

const SERVICE_AREAS: ServiceArea[] = [
  { name: "Bristol City Centre (BS1)", lat: 51.4545, lng: -2.5879, primary: true },
  { name: "Clifton & Redland (BS8, BS6)", lat: 51.4645, lng: -2.612 },
  { name: "Filton & Patchway (BS34)", lat: 51.5145, lng: -2.578 },
  { name: "Bedminster & Southville (BS3)", lat: 51.438, lng: -2.599 },
  { name: "M4, M5 & M32 Junctions", lat: 51.497, lng: -2.546 },
  { name: "Fishponds & Staple Hill (BS16)", lat: 51.4805, lng: -2.535 },
  { name: "Brislington & Keynsham", lat: 51.423, lng: -2.524 },
  { name: "Avonmouth & M49", lat: 51.504, lng: -2.693 },
];

const BRISTOL_CENTER: [number, number] = [51.4675, -2.585];

function createMarkerIcon(primary: boolean) {
  const html = primary
    ? `<span class="relative flex h-4 w-4">
         <span class="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping"></span>
         <span class="relative inline-flex rounded-full h-4 w-4 bg-amber-400 ring-2 ring-white"></span>
       </span>`
    : `<span class="relative flex h-3 w-3">
         <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-400 ring-2 ring-white"></span>
       </span>`;

  return L.divIcon({
    html,
    className: "bristol-map-marker",
    iconSize: primary ? [16, 16] : [12, 12],
    iconAnchor: primary ? [8, 8] : [6, 6],
  });
}

export default function BristolMap() {
  const icons = useMemo(
    () => ({
      primary: createMarkerIcon(true),
      standard: createMarkerIcon(false),
    }),
    []
  );

  return (
    <MapContainer
      center={BRISTOL_CENTER}
      zoom={11}
      scrollWheelZoom={false}
      zoomControl={true}
      attributionControl={true}
      className="w-full h-full"
      style={{ background: "#1e293b" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains={["a", "b", "c", "d"]}
        maxZoom={19}
      />
      {SERVICE_AREAS.map((area) => (
        <Marker
          key={area.name}
          position={[area.lat, area.lng]}
          icon={area.primary ? icons.primary : icons.standard}
        >
          <Popup>{area.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
