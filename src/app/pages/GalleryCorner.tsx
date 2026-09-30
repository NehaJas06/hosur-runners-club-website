import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

import photo01 from "../../imports/gallery-corner/DSC02194.JPG";
import photo02 from "../../imports/gallery-corner/DSC02853.JPG";
import photo03 from "../../imports/gallery-corner/DSC02548.JPG";
import photo04 from "../../imports/gallery-corner/DSC02518.JPG";
import photo05 from "../../imports/gallery-corner/DSC02428.JPG";
import photo06 from "../../imports/gallery-corner/DSC02424.JPG";
import photo07 from "../../imports/gallery-corner/DSC02416.JPG";
import photo08 from "../../imports/gallery-corner/DSC02239.JPG";
import photo09 from "../../imports/gallery-corner/DSC02226.JPG";
import photo10 from "../../imports/gallery-corner/DSC02218.JPG";
import photo11 from "../../imports/gallery-corner/DSC03246.JPG";
import photo12 from "../../imports/gallery-corner/DSC03190.JPG";
import photo13 from "../../imports/gallery-corner/DSC03288.JPG";
import photo14 from "../../imports/gallery-corner/DSC03255.JPG";
import photo15 from "../../imports/gallery-corner/DSC03253.JPG";

const galleryPhotos = [
  { src: photo01, alt: "Hosur Runners Club event felicitation" },
  { src: photo02, alt: "Hosur Runners Club runners at an event" },
  { src: photo03, alt: "Runners with guests after the event" },
  { src: photo04, alt: "Young performers at a Hosur Runners Club event" },
  { src: photo05, alt: "Runners on the track" },
  { src: photo06, alt: "Running event trophies" },
  { src: photo07, alt: "Hosur Runners Club event stage" },
  { src: photo08, alt: "Runners during the race" },
  { src: photo09, alt: "Runners at the finish area" },
  { src: photo10, alt: "Event torch ceremony" },
  { src: photo11, alt: "Hosur Runners Club community group" },
  { src: photo12, alt: "Runners and community members" },
  { src: photo13, alt: "Runners holding event awards" },
  { src: photo14, alt: "Hosur Runners Club group celebration" },
  { src: photo15, alt: "Runners celebrating together" },
];

export function GalleryCorner() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      (current - 1 + galleryPhotos.length) % galleryPhotos.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) => (current + 1) % galleryPhotos.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        <section className="py-14 md:py-16 bg-gradient-to-br from-[#0066B3] to-[#005094] text-white text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-4">
              Hosur Runners Club
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Gallery Corner</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Event moments, race-day memories, achievements, and the people who make our running community special.
            </p>
          </div>
        </section>

        <section className="bg-black">
          <div className="relative w-full h-[70vh] md:h-[78vh] min-h-[480px] overflow-hidden flex items-center justify-center">
            <img
              src={galleryPhotos[selectedIndex].src}
              alt={galleryPhotos[selectedIndex].alt}
              className="w-full h-full object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous gallery image"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/35 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next gallery image"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/35 transition-colors"
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center gap-3">
              <span className="text-white text-sm md:text-base font-semibold drop-shadow-lg">
                Event Moment {String(selectedIndex + 1).padStart(2, "0")} &nbsp;•&nbsp; {selectedIndex + 1} / {galleryPhotos.length}
              </span>
              <div className="flex items-center gap-2">
                {galleryPhotos.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Show gallery image ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      index === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
