import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import indonesiaGeoJson from "./indonesia-province-simple.json";

const NusantaraMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Clear existing SVG to avoid duplicates
    d3.select(mapRef.current).selectAll("*").remove();

    // Define the dimensions of the SVG
    const width = 1200; // Fixed width
    const height = 1000; // Fixed height

    const svg = d3
      .select(mapRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Create a projection and path generator
    const projection = d3.geoMercator().fitSize([width, height], indonesiaGeoJson); // Use geoMercator
    const path = d3.geoPath().projection(projection);

    // Define the grouping of provinces
    const majorIslands = {
      Sumatra: [
        "ACEH", "SUMATERA UTARA", "SUMATERA BARAT", "BENGKULU", "JAMBI", 
        "LAMPUNG", "SUMATERA SELATAN", "BANGKA BELITUNG", "RIAU"
      ],
      Java: [
        "DKI JAKARTA", "JAWA BARAT", "JAWA TENGAH", "JAWA TIMUR", 
        "BANTEN", "DAERAH ISTIMEWA YOGYAKARTA"
      ],
      Kalimantan: [
        "KALIMANTAN BARAT", "KALIMANTAN TENGAH", "KALIMANTAN SELATAN", "KALIMANTAN TIMUR"
      ],
      Sulawesi: [
        "SULAWESI UTARA", "SULAWESI TENGAH", "SULAWESI SELATAN", 
        "SULAWESI TENGGARA", "GORONTALO"
      ],
      Papua: [
        "IRIAN JAYA TIMUR", "IRIAN JAYA TENGAH", "IRIAN JAYA BARAT"
      ],
      Maluku: ["MALUKU", "MALUKU UTARA"],
      NusaPenida: ["BALI", "NUSATENGGARA BARAT", "NUSA TENGGARA TIMUR"],
    };

    const featuresByIsland = Object.entries(majorIslands).flatMap(([majorIsland, provinces]) => 
      indonesiaGeoJson.features.filter((feature) => provinces.includes(feature.properties.Propinsi.toUpperCase())).map((feature) => ({ ...feature, majorIsland }))
    );

    let counter = 1;
    const numberedFeatures = featuresByIsland.map((feature) => ({
      ...feature,
      number: counter++,
    }));

    // Draw the map with numbered islands
    svg
      .selectAll("path")
      .data(numberedFeatures)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "lightgreen")
      .attr("stroke", "black")
      .attr("stroke-width", 0.5)
      .on("mouseover", function (event, d) {
        d3.select(this)
          .attr("fill", "orange") // Change fill color
          .transition()
          .duration(200)
          .attr("transform", function () {
            const [x, y] = path.centroid(d); // Get centroid of the feature
            return `translate(${x}, ${y}) scale(1.15) translate(${-x}, ${-y})`; // Scale around the centroid
          });
      })
      .on("mouseout", function (event, d) {
        d3.select(this)
          .attr("fill", "lightgreen") // Reset fill color
          .transition()
          .duration(200)
          .attr("transform", "translate(0, 0) scale(1)"); // Reset transform
      });

    // Add numbers to each island
    svg
      .selectAll("text")
      .data(numberedFeatures)
      .enter()
      .append("text")
      .attr("x", (d) => path.centroid(d)[0])
      .attr("y", (d) => path.centroid(d)[1])
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr("font-size", "10px")
      .attr("fill", "black").style("font-family", "Nunito, sans-serif") // Explicitly set font-family
      .style("font-weight", "1000")
      .text((d) => d.number);
  }, []);

  return (
    <div
      className="min-w-[1100px]"
      ref={mapRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default NusantaraMap;
