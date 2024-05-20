import React, { useState, useEffect } from "react";
import "../app/globals.css";

export const Loading = () => {
  return (
    <div className="flex justify-center text-center m-auto">
      <button type="button" className="blinking" disabled>
        <p className="text-3xl">Wait for a moment...</p>
      </button>
    </div>
  );
};
