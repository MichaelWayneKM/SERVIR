import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

import Globe from "react-globe.gl";
import * as THREE from "three";

function GlobeView() {
  const globeEl = useRef<any>();
  const [countries, setCountries] = useState({ features: [] });
  const [hover, setHover] = useState<null | boolean>();
  const [rotation, setRotation] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
      });
  }, []);

  useEffect(() => {
    // const renderer = globeEl.current.renderer();
    // renderer.alpha = true;
    // renderer.antialias = true;

    setTimeout(() => {
      const geometry = new THREE.SphereBufferGeometry(100, 75, 75);
      const material = new THREE.MeshPhongMaterial();

      new THREE.TextureLoader().load("/clouds.png", (texture) => {
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
    globeEl.current.controls().autoRotateSpeed = 2;

    globeEl.current.pointOfView({ altitude: 2 }, 5000);

    // globeEl.current.controls().update();
  }, [rotation]);

  const onHoverHandler = useCallback((polygon: any) => {
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

    new THREE.TextureLoader().load("/assets/bump-large.jpg", (texture) => {
      globeMaterial.bumpMap = texture;
    });

    return globeMaterialTemp;
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="/assets/earth-large.jpg"
      // bumpImageUrl="/bump-large.jpg"
      globeMaterial={globeMaterial}
      polygonsData={countries.features.filter(
        (d: any) => d.properties.ISO_A2 !== "AQ"
      )}
      polygonAltitude={0.01}
      polygonCapColor={(d: any) =>
        d.properties.ISO_A3 === hover
          ? "rgba(255, 255,255, 0.3)"
          : "rgba(255, 255,255, 0)"
      }
      polygonSideColor={() => "rgba(255, 255, 255, 0)"}
      onPolygonHover={onHoverHandler}
    />
  );
}

export default GlobeView;
