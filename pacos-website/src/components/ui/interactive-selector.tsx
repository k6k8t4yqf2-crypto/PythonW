"use client";

import React, { useState, useEffect } from "react";
import {
  Droplets,
  Sparkles,
  Wind,
  Bath,
  Sun,
  Baby,
  SprayCan,
  Briefcase,
  Footprints,
  Pill,
} from "lucide-react";

interface SelectorOption {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface InteractiveSelectorProps {
  options?: SelectorOption[];
  heading?: string;
  subheading?: string;
}

const defaultOptions: SelectorOption[] = [
  {
    title: "Haut- & Körperpflege",
    description: "Cremes, Lotionen & Pflegeöle",
    image: "/images/products/hautpflege.jpg",
    icon: <Droplets size={24} className="text-white" />,
  },
  {
    title: "Gesichtspflege",
    description: "Seren, Masken & Anti-Aging",
    image: "/images/products/gesichtspflege.jpg",
    icon: <Sparkles size={24} className="text-white" />,
  },
  {
    title: "Haarpflege",
    description: "Shampoos, Conditioner & Kuren",
    image: "/images/products/haarpflege.jpg",
    icon: <Wind size={24} className="text-white" />,
  },
  {
    title: "Duft- & Schaumbäder",
    description: "Badezusätze, Duschgele & Seifen",
    image: "/images/products/badprodukte.jpg",
    icon: <Bath size={24} className="text-white" />,
  },
  {
    title: "Sonnenschutz",
    description: "LSF-Produkte & After-Sun-Pflege",
    image: "/images/products/sonnenschutz.jpg",
    icon: <Sun size={24} className="text-white" />,
  },
  {
    title: "Baby- & Kleinkinderpflege",
    description: "Sanfte Pflege für empfindliche Haut",
    image: "/images/products/babypflege.jpg",
    icon: <Baby size={24} className="text-white" />,
  },
  {
    title: "Deodoranten",
    description: "Roll-On, Spray & Stick-Formate",
    image: "/images/products/deodorant.jpg",
    icon: <SprayCan size={24} className="text-white" />,
  },
  {
    title: "Berufskosmetik",
    description: "Professionelle Produkte für Fachkräfte",
    image: "/images/products/berufskosmetik.jpg",
    icon: <Briefcase size={24} className="text-white" />,
  },
  {
    title: "Fußpflege",
    description: "Cremes, Balsame & Spezialpflege",
    image: "/images/products/fusspflege.jpg",
    icon: <Footprints size={24} className="text-white" />,
  },
  {
    title: "Pharmahilfsmittel",
    description: "Pharmazeutische Kosmetik & Hilfsmittel",
    image: "/images/products/pharma.jpg",
    icon: <Pill size={24} className="text-white" />,
  },
];

const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({
  options = defaultOptions,
  heading,
  subheading,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(options.length / itemsPerPage);

  const visibleOptions = options.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const handleOptionClick = (index: number) => {
    const globalIndex = page * itemsPerPage + index;
    if (globalIndex !== activeIndex) {
      setActiveIndex(globalIndex);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (isTransitioning || newPage === page) return;
    // Fade out first, then switch page
    setIsTransitioning(true);
    setAnimatedOptions([]);
    setTimeout(() => {
      setPage(newPage);
      setActiveIndex(newPage * itemsPerPage);
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    if (isTransitioning) return;
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Stagger-animate options after page change
    const resetTimer = setTimeout(() => {
      visibleOptions.forEach((_, i) => {
        const timer = setTimeout(() => {
          setAnimatedOptions((prev) => [...prev, i]);
        }, 120 * i);
        timers.push(timer);
      });
    }, 50);
    timers.push(resetTimer);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, visibleOptions.length, isTransitioning]);

  const localActiveIndex = activeIndex - page * itemsPerPage;

  return (
    <div className="relative flex flex-col items-center justify-center font-sans text-white">
      {/* Header */}
      {(heading || subheading) && (
        <div className="w-full max-w-2xl px-6 mb-2 text-center">
          {heading && (
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight"
              style={{
                animation: "fadeInFromTop 0.8s ease-in-out 0.3s forwards",
                opacity: 0,
                transform: "translateY(-20px)",
              }}
            >
              {heading}
            </h2>
          )}
          {subheading && (
            <p
              className="text-base md:text-lg text-gray-300 font-medium max-w-xl mx-auto"
              style={{
                animation: "fadeInFromTop 0.8s ease-in-out 0.6s forwards",
                opacity: 0,
                transform: "translateY(-20px)",
              }}
            >
              {subheading}
            </p>
          )}
        </div>
      )}

      <div className="h-8 md:h-12" />

      {/* Options container */}
      <div className="flex w-full max-w-[900px] h-[300px] md:h-[400px] items-stretch overflow-hidden relative">
        {visibleOptions.map((option, index) => {
          const isActive = localActiveIndex === index;
          const isAnimated = animatedOptions.includes(index);

          return (
            <div
              key={`${page}-${index}`}
              className="relative flex flex-col justify-end overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: isActive ? "auto 100%" : "auto 120%",
                backgroundPosition: "center",
                backfaceVisibility: "hidden",
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated
                  ? "translateX(0)"
                  : "translateX(-60px)",
                minWidth: "50px",
                minHeight: "100px",
                margin: 0,
                borderRadius: 0,
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: isActive ? "#fff" : "rgba(255,255,255,0.1)",
                backgroundColor: "#0f172a",
                boxShadow: isActive
                  ? "0 20px 60px rgba(0,0,0,0.50)"
                  : "0 10px 30px rgba(0,0,0,0.30)",
                flex: isActive ? "7 1 0%" : "1 1 0%",
                zIndex: isActive ? 10 : 1,
                transition:
                  "flex 0.7s ease-in-out, box-shadow 0.7s ease-in-out, background-size 0.7s ease-in-out, border-color 0.7s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                willChange:
                  "flex-grow, box-shadow, background-size, background-position",
              }}
              onClick={() => handleOptionClick(index)}
            >
              {/* Bottom shadow gradient */}
              <div
                className="absolute left-0 right-0 pointer-events-none"
                style={{
                  bottom: isActive ? "0" : "-40px",
                  height: "120px",
                  boxShadow: isActive
                    ? "inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000"
                    : "inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000",
                  transition: "all 0.7s ease-in-out",
                }}
              />

              {/* Label with icon */}
              <div className="absolute left-0 right-0 bottom-4 md:bottom-5 flex items-center justify-start h-12 z-[2] pointer-events-none px-3 md:px-4 gap-3 w-full">
                <div className="min-w-[40px] max-w-[40px] h-[40px] md:min-w-[44px] md:max-w-[44px] md:h-[44px] flex items-center justify-center rounded-full bg-[rgba(15,23,42,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[rgba(255,255,255,0.2)] flex-shrink-0 flex-grow-0 transition-all duration-200">
                  {option.icon}
                </div>
                <div className="text-white whitespace-pre relative overflow-hidden">
                  <div
                    className="font-bold text-base md:text-lg"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateX(0)"
                        : "translateX(25px)",
                      transition:
                        "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
                    }}
                  >
                    {option.title}
                  </div>
                  <div
                    className="text-sm md:text-base text-gray-300"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateX(0)"
                        : "translateX(25px)",
                      transition:
                        "opacity 0.7s ease-in-out 0.05s, transform 0.7s ease-in-out 0.05s",
                    }}
                  >
                    {option.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Page navigation */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => handlePageChange(Math.max(0, page - 1))}
            disabled={page === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white disabled:opacity-30"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === page
                  ? "w-8 bg-primary-400"
                  : "w-2.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
          <button
            onClick={() =>
              handlePageChange(Math.min(totalPages - 1, page + 1))
            }
            disabled={page === totalPages - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-white/40 hover:text-white disabled:opacity-30"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
