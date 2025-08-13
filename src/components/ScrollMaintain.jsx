import { useEffect } from "react";


export default function ScrollMaintain  () {
useEffect(() => {
  const scrollPos = sessionStorage.getItem("scrollPos");
  if (scrollPos) {
    window.scrollTo(0, parseInt(scrollPos, 10));
  }

  const saveScrollPos = () => {
    sessionStorage.setItem("scrollPos", window.scrollY);
  };

  window.addEventListener("beforeunload", saveScrollPos);
  return () => window.removeEventListener("beforeunload", saveScrollPos);
}, []);
}
