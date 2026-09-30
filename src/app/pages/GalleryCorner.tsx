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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current - 1 + galleryPhotos.length) % galleryPhotos.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % galleryPhotos.length,
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-[#0066B3] to-[#005094] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-5">
              Hosur Runners Club
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">Gallery Corner</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Event moments, race-day memories, achievements, and the people who make our running community special.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="group relative h-72 md:h-80 overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all text-left focus:outline-none focus:ring-4 focus:ring-[#0066B3]/30"
                  aria-label={`Open gallery image ${index + 1}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                    Event Moment {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous gallery image"
            className="absolute left-3 md:left-8 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          <img
            src={galleryPhotos[selectedIndex].src}
            alt={galleryPhotos[selectedIndex].alt}
            className="max-h-[88vh] max-w-[92vw] object-contain rounded-xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next gallery image"
            className="absolute right-3 md:right-8 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
            {selectedIndex + 1} / {galleryPhotos.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
