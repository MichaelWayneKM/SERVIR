import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

import Globe from "react-globe.gl";
import { useDispatch, useSelector } from "react-redux";
import { SizeMe } from "react-sizeme";
import * as THREE from "three";
import {
  globeStateSlector,
  mapZoomActive,
} from "../core/redux/slices/globe_mode_reducer";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

type LatLngTuple = number[];
function MapComponent() {
  const position: any = [1.2212, 36.8941];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        //attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
        url="url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

function GlobeView() {
  /*const globeEl = useRef<any>();
  const [countries, setCountries] = useState(require("../assets/json/globe.json"));
  const [hover, setHover] = useState<null | boolean>();
  const [rotation, setRotation] = useState(true);

  const [width, setWidth] = useState<number>(window.innerWidth);

  const { mapActive } = useSelector(globeStateSlector);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        //console.log("")
      });
    }
  }, []);

  useEffect(() => {
    // const renderer = globeEl.current.renderer();
    // renderer.alpha = true;
    // renderer.antialias = true;

    setTimeout(() => {
      const geometry = new THREE.SphereBufferGeometry(100, 75, 75);
      const material = new THREE.MeshPhongMaterial();

      new THREE.TextureLoader().load("/assets/clouds.png", (texture) => {
        material.map = texture;
        material.transparent = true;
        material.opacity = 0.1;
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.scale.set(1.015, 1.015, 1.015);

      const scene = globeEl.current.scene();
      // scene.add(mesh);
    });
  }, []);

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = -0.8;

    globeEl.current.pointOfView(
      { altitude: 1, lat: 1.2212, lng: 36.8941 },
      5000
    );

    // globeEl.current.controls().update();
  }, [rotation]);

  useEffect(() => {
    if (!mapActive) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = -0.1;

      globeEl.current.pointOfView(
        { altitude: 1, lat: 1.2212, lng: 36.8941 },
        5000
      );
    }
  }, [mapActive]);

  const onHoverHandler = useCallback(async (polygon: any) => {
    if (polygon !== null) {
      setHover(polygon.properties.ISO_A3);
      // setRotation(false);
      globeEl.current.controls().autoRotate = false;
    } else {
      setHover(null);
      // setRotation(true);
      globeEl.current.controls().autoRotate = true;
    }
  }, []);

  const globeMaterial = useMemo(() => {
    const globeMaterialTemp = new THREE.MeshPhongMaterial();
    globeMaterialTemp.bumpScale = 10;

    new THREE.TextureLoader().load(
      "/assets/bump-large.jpg",
      async (texture) => {
        globeMaterial.bumpMap = texture;
      }
    );

    return globeMaterialTemp;
  }, []);

  useEffect(() => {});

  

  const markerSvg = `
  <div>
    <div style="font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: normal;">Kenya</div>
    <svg viewBox="-4 0 36 36">
      <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
      <circle fill="black" cx="14" cy="14" r="7"></circle>
    </svg>
  <div>`;

  // Gen random data
  const N = 1;
  const gData = [...(Array(N) as any).keys()].map(async () => ({
    // Async performance Throttle
    //lat: (Math.random() - 0.5) * 180,
    //lng: (Math.random() - 0.5) * 360,1.2212° S, 36.8941° E
    lat: 1.2212,
    lng: 36.8941,
    size: 30, //7 + Math.random() * 30, // size accordint to Magnitude
    color: `rgba(${Math.random() * 156}, ${Math.random() * 16}, ${
      Math.random() * 56
    }, 1)`, // ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  })); */

  return (
    // <Globe
    //   ref={globeEl}
    //   width={width}
    //   globeImageUrl="/assets/earth-large.jpg"
    //   // bumpImageUrl="/bump-large.jpg"
    //   globeMaterial={globeMaterial}
    //   //polygonsData={countries.features}
    //    polygonsData={countries.features.filter(
    //      (d: any) => d.properties.CONTINENT == "Africa"
    //    )}
    //   polygonAltitude={0.01}
    //   polygonCapColor={(d: any) =>
    //     d.properties.ISO_A3 === hover
    //       ? "rgba(255, 255,255, 0.3)"
    //       : "rgba(255, 255,255, 0)"
    //   }
    //   polygonSideColor={() => "rgba(255, 255, 255, 0)"}
    //   polygonStrokeColor={() => "rgba(255, 255, 255, 0.5)"}
    //   onPolygonHover={onHoverHandler}
    //   htmlElementsData={gData}
    //   htmlElement={(d: any) => {
    //     const el = document.createElement("div");
    //     el.innerHTML = markerSvg;
    //     el.style.color = d.color;
    //     el.style.width = `${d.size}px`;

    //     el.style["pointer-events" as any] = "auto";
    //     el.style.cursor = "pointer";
    //     el.onclick = async () => {
    //       console.info(d);
    //       globeEl.current.pointOfView(
    //         { altitude: 0.05, lat: d.lat, lng: d.lng },
    //         2000
    //       );
    //       dispatch(mapZoomActive());
    //     };

    //     return el;
    //   }}
    // />
    <div className="leaflet-container">
      <MapComponent />
    </div>
  );
}

export default React.memo(GlobeView);
