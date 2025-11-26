"use client";

import { useState } from "react";
import { useCurrency } from "@/components/currency-context";
import { convertPrice, formatPrice } from "@/components/currency-changer";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PricingCardProps {
  title: string;
  usdPrice?: number;
  phpPrice?: number;
  description: string;
  features: string[];
  featureDetails?: string[]; // New prop for detailed descriptions
  bestFor?: string[]; // Who this package is best for
  whyItConverts?: string[]; // Why customers choose this package
  badge?: string;
  badgeColor?: string;
  icon: React.ReactNode;
  gradient: string;
  buttonText: string;
  buttonHref: string;
  popular?: boolean;
  enterprise?: boolean;
}

export function PricingCard({
  title,
  usdPrice,
  phpPrice,
  description,
  features,
  featureDetails = [], // Default to empty array
  bestFor = [], // Default to empty array
  whyItConverts = [], // Default to empty array
  badge,
  badgeColor = "from-cyan-500 to-lime-500",
  icon,
  gradient,
  buttonText,
  buttonHref,
  popular = false,
  enterprise = false,
}: PricingCardProps) {
  const { selectedCurrency, currencies } = useCurrency();
  const [isBestForExpanded, setIsBestForExpanded] = useState(false);
  const [isWhyItConvertsExpanded, setIsWhyItConvertsExpanded] = useState(false);

  // Get PHP currency object for conversion
  const phpCurrency = currencies.find(c => c.code === 'PHP');

  // Calculate and format price based on selected currency
  let formattedPrice: string;

  if (phpPrice !== undefined && phpCurrency) {
    if (selectedCurrency.code === 'PHP') {
      // Display as PHP without conversion
      formattedPrice = `₱${phpPrice.toLocaleString('en-PH', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    } else {
      // Convert PHP to selected currency
      // First convert PHP to USD (divide by PHP rate), then to target currency
      const priceInUSD = phpPrice / phpCurrency.rate;
      const convertedPrice = convertPrice(priceInUSD, selectedCurrency);
      formattedPrice = formatPrice(convertedPrice, selectedCurrency);
    }
  } else if (usdPrice !== undefined) {
    const convertedPrice = convertPrice(usdPrice, selectedCurrency);
    formattedPrice = formatPrice(convertedPrice, selectedCurrency);
  } else {
    formattedPrice = 'N/A';
  }

  return (
    <div className="relative group">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
      <div className="relative bg-white dark:bg-slate-900 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
        {badge && (
          <div className="absolute top-4 right-4">
            <div className={`bg-gradient-to-r ${badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold ${enterprise ? 'animate-pulse' : ''}`}>
              {badge}
            </div>
          </div>
        )}

        <div className="text-center mb-8">
          <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center`}>
            {icon}
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {title}
          </h3>
          <div className="mb-2">
            <div className="text-4xl lg:text-3xl xl:text-4xl font-bold text-cyan-600 dark:text-cyan-400 leading-tight">
              {formattedPrice}
            </div>
            <div className="text-lg text-slate-500 dark:text-slate-400 mt-1">
              /month
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>

        <div className="space-y-4 mb-8 flex-grow">
          {features.map((feature, i) => (
            <div key={i} className="group/feature relative">
              <div className="flex items-start gap-3 cursor-help transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg p-2 -m-2">
                <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover/feature:scale-110 group-hover/feature:bg-cyan-200 dark:group-hover/feature:bg-cyan-800">
                  <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-300 transition-colors duration-200 group-hover/feature:text-slate-900 dark:group-hover/feature:text-white">
                  {feature}
                </span>
                
                {/* Hover hint indicator */}
                {featureDetails[i] && (
                  <div className="ml-auto opacity-0 group-hover/feature:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/feature:translate-x-0">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center animate-pulse">
                      <svg className="w-3 h-3 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Hover tooltip with detailed description */}
              {featureDetails[i] && (
                <div className="absolute left-0 top-full mt-2 z-50 opacity-0 group-hover/feature:opacity-100 transition-all duration-300 pointer-events-none group-hover/feature:pointer-events-auto transform translate-y-2 group-hover/feature:translate-y-0">
                  <div className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-3 rounded-lg shadow-xl max-w-xs text-sm leading-relaxed border border-slate-700 dark:border-slate-300">
                    {featureDetails[i]}
                    {/* Arrow pointing up */}
                    <div className="absolute -top-2 left-6 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-slate-900 dark:border-b-slate-100"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Hover discovery hint */}
          {featureDetails.some(detail => detail) && (
            <div className="mt-6 p-2 sm:p-3 bg-gradient-to-r from-cyan-50 to-lime-50 dark:from-cyan-900/20 dark:to-lime-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-cyan-700 dark:text-cyan-300">
                <div className="flex items-center gap-1 sm:gap-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium whitespace-nowrap">💡 Pro tip:</span>
                </div>
                <span className="sm:ml-1 leading-relaxed">Hover over features to see detailed descriptions</span>
              </div>
            </div>
          )}
        </div>

        {/* Best For Section - Collapsible */}
        {bestFor.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setIsBestForExpanded(!isBestForExpanded)}
              className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-200 group"
            >
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                Best For
              </h4>
              {isBestForExpanded ? (
                <ChevronUp className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isBestForExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                <ul className="space-y-2">
                  {bestFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Why It Converts Section - Collapsible */}
        {whyItConverts.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setIsWhyItConvertsExpanded(!isWhyItConvertsExpanded)}
              className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-cyan-50 to-lime-50 dark:from-cyan-900/30 dark:to-lime-900/30 rounded-lg border border-cyan-200 dark:border-cyan-700 hover:border-cyan-300 dark:hover:border-cyan-600 transition-all duration-200 group"
            >
              <h4 className="text-sm font-bold text-cyan-900 dark:text-cyan-100 uppercase tracking-wide">
                Why Choose This
              </h4>
              {isWhyItConvertsExpanded ? (
                <ChevronUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-900 dark:group-hover:text-cyan-100 transition-colors" />
              ) : (
                <ChevronDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-900 dark:group-hover:text-cyan-100 transition-colors" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isWhyItConvertsExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 bg-gradient-to-r from-cyan-50 to-lime-50 dark:from-cyan-900/30 dark:to-lime-900/30 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <ul className="space-y-2">
                  {whyItConverts.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-cyan-800 dark:text-cyan-200">
                      <span className="text-lime-600 dark:text-lime-400 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-auto">
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full bg-gradient-to-r ${gradient} hover:from-cyan-700 hover:to-lime-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
