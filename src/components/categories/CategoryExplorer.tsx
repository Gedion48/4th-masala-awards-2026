import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AWARD_CATEGORIES } from "../../data/categories";
import { AwardCategory } from "../../data/types";
import {
  ChevronRight,
  Award,
  Shield,
  CheckCircle2,
  Star,
  Sparkles,
} from "lucide-react";

export const CategoryExplorer: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    AWARD_CATEGORIES[0].id,
  );
  const [selectedSubcategoryId, setSelectedSubcategoryId] =
    useState<string>("male-footballer");

  const selectedCategory: AwardCategory =
    AWARD_CATEGORIES.find((c) => c.id === selectedCategoryId) ||
    AWARD_CATEGORIES[0];

  // If Sport Sector, determine which subcategory criteria to show
  const activeSubcategory =
    selectedCategory.subcategories?.find(
      (s) => s.id === selectedSubcategoryId,
    ) || selectedCategory.subcategories?.[0];

  const criteriaToShow = activeSubcategory
    ? activeSubcategory.criteria
    : selectedCategory.criteria;

  return (
    <section
      id="categories"
      className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#D9D3C8]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#6F1D2E]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F1D2E]">
              Official Honors &amp; Distinction
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1D1D1B] tracking-tight">
            AWARD CATEGORIES
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A3528] font-display italic leading-relaxed">
            Eight official competitive sectors reflecting leadership, service,
            entrepreneurship, and cultural stewardship across the Kambata
            community.
          </p>
        </div>

        {/* Desktop Split-Screen Explorer / Mobile Responsive Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Category Navigation List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="p-3 bg-white border border-[#D9D3C8] rounded-xl mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B08A45] block px-3 pt-1">
                Select Award Sector (01 - 08)
              </span>
            </div>

            {AWARD_CATEGORIES.map((category) => {
              const isSelected = category.id === selectedCategoryId;
              return (
                <button
                  key={category.id}
                  id={`category-tab-${category.code}`}
                  onClick={() => {
                    setSelectedCategoryId(category.id);
                    if (
                      category.subcategories &&
                      category.subcategories.length > 0
                    ) {
                      setSelectedSubcategoryId(category.subcategories[0].id);
                    }
                  }}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#6F1D2E] text-white border-[#6F1D2E] shadow-sm"
                      : "bg-white text-[#1D1D1B] border-[#D9D3C8] hover:border-[#B08A45] hover:bg-[#FAF9F5]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-serif text-lg font-bold tracking-tight ${
                        isSelected
                          ? "text-[#E9E3D8]"
                          : "text-[#6F1D2E] group-hover:text-[#B08A45]"
                      }`}
                    >
                      {category.code}
                    </span>
                    <div>
                      <h3
                        className={`text-sm sm:text-base font-semibold leading-snug font-serif ${
                          isSelected ? "text-white" : "text-[#1D1D1B]"
                        }`}
                      >
                        {category.name}
                      </h3>
                      <span
                        className={`text-[11px] block mt-0.5 ${
                          isSelected ? "text-white/80" : "text-[#4A3528]/70"
                        }`}
                      >
                        {category.sector}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-[#E9E3D8] translate-x-1"
                        : "text-[#D9D3C8] group-hover:text-[#B08A45]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Selected Category Details & Official Evaluation Criteria (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.id + (activeSubcategory?.id || "")}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white border border-[#D9D3C8] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(74,53,40,0.04)] text-left space-y-7"
              >
                {/* Category Header */}
                <div className="border-b border-[#D9D3C8]/80 pb-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#B08A45]">
                      Sector {selectedCategory.code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#FAF9F5] border border-[#D9D3C8] text-[11px] font-semibold text-[#4A3528]">
                      <Shield className="w-3 h-3 text-[#536B55]" />
                      Official Criteria
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-semibold tracking-tight">
                    {selectedCategory.name}
                  </h3>

                  <p className="font-display italic text-lg text-[#6F1D2E]">
                    {selectedCategory.shortDescription}
                  </p>

                  <p className="text-sm text-[#1D1D1B]/80 font-sans leading-relaxed pt-1">
                    {selectedCategory.fullDescription}
                  </p>
                </div>

                {/* Subcategory Switcher (if applicable, e.g. Sport Sector) */}
                {selectedCategory.subcategories && (
                  <div className="p-4 bg-[#FAF9F5] border border-[#D9D3C8] rounded-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B]">
                        Select Sports Subcategory:
                      </span>
                      <span className="text-[10px] text-[#4A3528]/80 font-mono">
                        3 Honors In This Sector
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {selectedCategory.subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setSelectedSubcategoryId(sub.id)}
                          className={`px-3 py-2 text-xs font-semibold rounded-md border text-center transition-all ${
                            selectedSubcategoryId === sub.id
                              ? "bg-[#6F1D2E] text-white border-[#6F1D2E]"
                              : "bg-white text-[#1D1D1B] border-[#D9D3C8] hover:border-[#B08A45]"
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Committee Evaluation Criteria Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#D9D3C8]/60 pb-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#B08A45]" />
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D1D1B]">
                        Committee Evaluation Criteria &amp; Weights
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#6F1D2E]">
                      Total: 80%
                    </span>
                  </div>

                  {/* Criteria List with Percentage Bars */}
                  <div className="space-y-4">
                    {criteriaToShow.map((criterion, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-[#FAF9F5] border border-[#D9D3C8]/80 rounded-xl space-y-2 hover:border-[#D9D3C8] transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-0.5">
                            <span className="text-xs sm:text-sm font-semibold text-[#1D1D1B] block font-serif">
                              {criterion.label}
                            </span>
                            {criterion.description && (
                              <p className="text-xs text-[#4A3528]/85 font-sans leading-normal">
                                {criterion.description}
                              </p>
                            )}
                          </div>
                          <span className="font-serif text-lg sm:text-xl font-bold text-[#6F1D2E] shrink-0">
                            {criterion.weight}%
                          </span>
                        </div>

                        {/* Clean Horizontal Percentage Bar */}
                        <div className="w-full bg-[#E9E3D8] h-2 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${criterion.weight}%` }}
                            transition={{ duration: 0.7, delay: idx * 0.05 }}
                            className="h-full bg-[#6F1D2E]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recognition Areas (Specifically for Special Masala Awards) */}
                {selectedCategory.recognitionAreas && (
                  <div className="p-5 bg-[#FAF9F5] border border-[#D9D3C8] rounded-xl space-y-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#B08A45]" />
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D1D1B]">
                        Special Masala Recognition Spheres
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedCategory.recognitionAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-white border border-[#D9D3C8] rounded-full text-xs font-medium text-[#4A3528] shadow-2xs"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Verification Note */}
                <div className="pt-4 border-t border-[#D9D3C8] flex items-center justify-between text-xs text-[#4A3528]/80 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#536B55]" />
                    <span>Official Masala Award Committee Standard</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#B08A45]">
                    2026 Edition
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
