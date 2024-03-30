import { useEffect, useState } from "react";
import useOnlineCheck from "../utils/useOnlineCheck";

const OfflineAlert = () => {
  const { onlineCheck, content } = useOnlineCheck();
  return onlineCheck ? (
    <div
      className={`absolute w-full bg-[#3efb6a] -top-4 text-white h-4 text-xs flex items-center justify-center ease duration-1000`}
    >
      {content}
    </div>
  ) : (
    <div
      className={`absolute w-full bg-[#fb3e3e] top-0 text-white h-4 text-xs flex items-center justify-center ease  duration-500`}
    >
      {content}
    </div>
  );
};

export default OfflineAlert;
