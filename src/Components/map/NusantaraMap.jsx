import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import indonesiaGeoJson from "./indonesia-province-simple.json";

const NusantaraMap = ({onIslandClick}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Clear existing SVG to avoid duplicates
    d3.select(mapRef.current).selectAll("*").remove();

    // Define the dimensions of the SVG
    const width = 1200;
    const height = 1000;

    const svg = d3
      .select(mapRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Create a projection and path generator
    const projection = d3.geoMercator().fitSize([width, height], indonesiaGeoJson);
    const path = d3.geoPath().projection(projection);

    // Define the grouping of provinces
    const majorIslands = {
      Sumatra: [
        "RIAU",
        "SUMATERA UTARA",
        "BANGKA BELITUNG",
        "SUMATERA BARAT",
        "SUMATERA SELATAN",
        "JAMBI",
        "LAMPUNG",
        "BENGKULU",
        "ACEH"
      ],
      Java: [
        "DAERAH ISTIMEWA YOGYAKARTA",
        "JAWA TENGAH",
        "BANTEN",
        "JAWA TIMUR",
        "DKI JAKARTA",
        "JAWA BARAT"
      ],
      Kalimantan: [
        "KALIMANTAN SELATAN",
        "KALIMANTAN BARAT",
        "KALIMANTAN TIMUR",
        "KALIMANTAN TENGAH"
      ],
      Sulawesi: [
        "GORONTALO",
        "SULAWESI TENGGARA",
        "SULAWESI SELATAN",
        "SULAWESI TENGAH",
        "SULAWESI UTARA"
      ],
      Papua: [
        "IRIAN JAYA TIMUR",
        "IRIAN JAYA TENGAH",
        "IRIAN JAYA BARAT"
      ],
      Maluku: [
        "MALUKU UTARA",
        "MALUKU"
      ],
      NusaPenida: [
        "NUSATENGGARA BARAT",
        "NUSA TENGGARA TIMUR",
        "BALI"
      ]
    };    

    const featuresByIsland = Object.entries(majorIslands).flatMap(([majorIsland, provinces]) =>
      indonesiaGeoJson.features
        .filter((feature) => provinces.includes(feature.properties.Propinsi.toUpperCase()))
        .map((feature, index) => ({
          ...feature,
          majorIsland,
          number: index + 1, // Ensure consistent numbering
        }))
    );

    let globalIndex = 1;
    featuresByIsland.forEach((feature) => {
      feature.number = globalIndex++;
    });

    // Tooltip container
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("padding", "3px 6px")
      .style("margin", "10px")
      .style("background", "white")
      .style("border", "1px solid black")
      .style("border-radius", "5px")
      .style("opacity", 0)
      .style("font-size", '10px')
      .style("font-family", 'Nunito');

    // Draw the map with numbered islands
    svg
      .selectAll("path")
      .data(featuresByIsland)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "lightgreen")
      .attr("stroke", "black")
      .attr("stroke-width", 0.5)
      .on("mouseover", function (event, d) {
        d3.select(this)
          .attr("fill", "orange")
          .transition()
          .duration(200)
          .attr("transform", function () {
            const [x, y] = path.centroid(d);
            return `translate(${x}, ${y}) scale(1.1) translate(${-x}, ${-y})`;
          })
          ;

        // Show tooltip
        tooltip
          .style("opacity", 1)
          .html(d.properties.Propinsi)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY + 10}px`);
      })
      .on("mousemove", (event) => {
        tooltip.style("left", `${event.pageX + 1}px`).style("top", `${event.pageY + 1}px`);
      })
      .on("mouseout", function () {
        d3.select(this)
          .attr("fill", "lightgreen")
          .transition()
          .duration(200)
          .attr("transform", "translate(0, 0) scale(1)");

        tooltip.style("opacity", 0);
      })
      .on("click", function (event, d) {
        const formattedName = d.properties.Propinsi
      
        const targetElement = document.getElementById(formattedName);
      
        if (targetElement) {
          const offset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const scrollToPosition = elementPosition - offset;
        
          window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
        } else {
          console.error(`Element with id "${formattedName}" not found.`);
        }

        if (onIslandClick) {
      onIslandClick(formattedName); // Pass the clicked island to the parent
      }
      });
      

    // Add numbers to each island
    svg
      .selectAll("text")
      .data(featuresByIsland)
      .enter()
      .append("text")
      .attr("x", (d) => path.centroid(d)[0])
      .attr("y", (d) => path.centroid(d)[1])
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr("font-size", "10px")
      .attr("fill", "black")
      .style("font-family", "Nunito, sans-serif")
      .style("font-weight", "1000")
      .style("pointer-events", "none")
      .text((d) => d.number)
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
