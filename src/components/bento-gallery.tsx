"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Area = { col: string; row: string };

type Tile = {
  src: string;
  alt: string;
  caption: string;
  base: Area;
  hover: Area;
};

const tiles: Tile[] = [
  {
    src: "/pic3.jpg",
    alt: "Group photo on stage at the IBPAP HackIT challenge",
    caption: "Can You HackIT? — The IBPAP Challenge 2026. Left the venue with nothing but full of wisdom that no award could ever equate.",
    base: { col: "1 / 3", row: "1 / 3" },
    hover: { col: "1 / 3", row: "1 / 3" },
  },
  {
    src: "/pic1.jpg",
    alt: "Students working at computer lab workstations",
    caption: "ICT Congress 2026 with Team Figmeyms 😘",
    base: { col: "3 / 4", row: "1 / 2" },
    hover: { col: "3 / 5", row: "1 / 3" },
  },
  {
    src: "/pic2.jpg",
    alt: "Two people coding on laptops at a hackathon",
    caption: "IBPAP Hackathon Session. Full of pressure but managed to finish our app",
    base: { col: "4 / 5", row: "1 / 2" },
    hover: { col: "3 / 5", row: "1 / 3" },
  },
  {
    src: "/pic5.jpg",
    alt: "Christo wearing a P.I.O. jersey, seen from behind",
    caption: "Serving as P.I.O. for PSITS. First orientation we've ever organized. Loved every pressure I've faced with the gang.",
    base: { col: "3 / 4", row: "2 / 4" },
    hover: { col: "3 / 5", row: "2 / 4" },
  },
  {
    src: "/pic4.jpg",
    alt: "Group holding certificates of recognition",
    caption: "Awarding of certificates recognizing both our academic dedication and leadership",
    base: { col: "1 / 3", row: "3 / 4" },
    hover: { col: "1 / 3", row: "2 / 4" },
  },
  {
    src: "/pic7.jpg",
    alt: "Team photo celebrating 2nd place in UI/UX",
    caption: "2nd Place, UI/UX — CCS Innovation Days with Figmeyms again.",
    base: { col: "4 / 5", row: "2 / 3" },
    hover: { col: "3 / 5", row: "2 / 4" },
  },
  {
    src: "/pic6.jpg",
    alt: "Group photo at Tech Week Philippines",
    caption: "Tech Week Philippines, with the team",
    base: { col: "4 / 5", row: "3 / 4" },
    hover: { col: "3 / 5", row: "2 / 4" },
  },
];

function parseLines(value: string) {
  return value.split("/").map((line) => parseInt(line.trim(), 10));
}

function areasOverlap(a: Area, b: Area) {
  const [aColStart, aColEnd] = parseLines(a.col);
  const [aRowStart, aRowEnd] = parseLines(a.row);
  const [bColStart, bColEnd] = parseLines(b.col);
  const [bRowStart, bRowEnd] = parseLines(b.row);
  const colsOverlap = aColStart < bColEnd && bColStart < aColEnd;
  const rowsOverlap = aRowStart < bRowEnd && bRowStart < aRowEnd;
  return colsOverlap && rowsOverlap;
}

export function BentoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredTile = hoveredIndex !== null ? tiles[hoveredIndex] : null;

  return (
    <>
      {/* Desktop / tablet: interactive bento grid */}
      <div className="hidden gap-4 sm:grid sm:auto-rows-[150px] sm:grid-cols-4">
        {tiles.map((tile, index) => {
          const isHovered = hoveredIndex === index;
          const isCovered =
            hoveredTile !== null &&
            !isHovered &&
            areasOverlap(hoveredTile.hover, tile.base);
          const area = isHovered ? tile.hover : tile.base;

          return (
            <motion.div
              key={tile.src}
              layout
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() =>
                setHoveredIndex((current) => (current === index ? null : current))
              }
              style={{
                gridColumn: area.col,
                gridRow: area.row,
                zIndex: isHovered ? 20 : 1,
              }}
              className="relative overflow-hidden rounded-2xl"
            >
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: isCovered ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-x-0 bottom-0 bg-primary/40 px-4 py-3"
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 8,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm font-medium text-white">
                    {tile.caption}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: simple static grid, captions always visible */}
      <div className="grid grid-cols-2 gap-4 sm:hidden">
        {tiles.map((tile) => (
          <div
            key={tile.src}
            className="relative aspect-square overflow-hidden rounded-2xl"
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              sizes="50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-primary/40 px-3 py-2">
              <p className="text-xs font-medium text-white">{tile.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
