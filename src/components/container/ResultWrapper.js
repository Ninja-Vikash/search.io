"use client";
export default function ResultWrapper({ children }) {
  return (
    <div className="xs:w-auto lg:w-3/5 mx-auto px-3 transition-all ease-in duration-100">
      {children}
    </div>
  );
}
