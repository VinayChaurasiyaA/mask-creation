import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";
import "./App.scss";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  return (
    <main className="main">
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A visual disgner - with skills which are not yet replaced by A.I.
          (yet)- making good shit only because paycheck is pretty well.
        </p>
      </motion.div>

      <div className="body">
        <p>
          I'm a <span>selectively skilled </span>
          product developer with strong focus on producing high quality &
          impactful experience
        </p>
      </div>
    </main>
  );
}

export default App;
