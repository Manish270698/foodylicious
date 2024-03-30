import { useEffect, useState } from "react";

const useOnlineCheck = () => {
  const [onlineCheck, setOnlineCheck] = useState(true);
  const [showAlert, setShowAlert] = useState("hide");
  const [content, setContent] = useState("You are offline");

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineCheck(true);
    });
    window.addEventListener("offline", () => {
      setOnlineCheck(false);
    });

    return () => {
        window.removeEventListener("online", () => {
            setOnlineCheck(true);
          });
          window.removeEventListener("offline", () => {
            setOnlineCheck(false);
          });
      };
      
  }, []);

  useEffect(() => {
    if (!onlineCheck) {
      setContent("You are offline");
      setShowAlert("show");
      console.log(onlineCheck);
    } else {
      setContent("You are back online");
      setShowAlert("hide");
    }
  }, [onlineCheck]);

  return {onlineCheck, showAlert, content };
};

export default useOnlineCheck;
