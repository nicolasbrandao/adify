import React from "react";

function Loading() {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto my-auto h-fit w-fit">
        <span className="loading loading-spinner loading-lg" />
      </div>
    </div>
  );
}

export default Loading;
