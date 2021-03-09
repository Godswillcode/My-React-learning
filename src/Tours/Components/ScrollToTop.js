import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scroll = () => window.scrollTo({ top: 0, behaviour: "smooth" });

  if (!visible) {
    return false;
  }
  return (
    <div className="scroll-to-top text-center" onClick={scroll}>
      <i className="icon fas fa-chevron-up"></i>
    </div>
  );
};

export default ScrollToTop;
