import React from "react";
import ThankYou from "../components/ThankYou";

export default function ThankYouPage() {
  return (
    <>
      {/* @ts-expect-error */}
      <ThankYou />
    </>
  );
}
