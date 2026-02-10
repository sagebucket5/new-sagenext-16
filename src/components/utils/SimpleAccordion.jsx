// components/SimpleAccordion.jsx
"use client";

export default function SimpleAccordion({ accordionData = [] }) {
  return (
    <div className="space-y-2">
      {accordionData.map((item, index) => (
        <details
          key={index}
          className="group rounded-md border border-gray-200 bg-white shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-2 py-1.5 select-none">
            <h3 className="text-base font-semibold text-gray-900 pl-3">
              {item.title}
            </h3>

            {/* Chevron */}
            <svg
              className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </summary>

          <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-gray-700">
            <div
              className="prose prose-sm max-w-none
                         prose-p:my-2
                         prose-ul:my-2 prose-ul:list-disc prose-ul:pl-5
                         prose-li:my-1
                         prose-b:text-gray-900"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </details>
      ))}

      {/* Hide default marker (Safari/Chrome) */}
      <style jsx>{`
        summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  );
}