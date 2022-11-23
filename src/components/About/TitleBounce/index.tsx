import { motion, useAnimationControls } from "framer-motion";
import { ReactNode, useState } from "react";

interface iTitleBounce {
  children: ReactNode;
}

export function TitleBounce({ children }: iTitleBounce) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const controls = useAnimationControls();

  const bounce = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setIsActive(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isActive) {
          bounce();
        }
      }}
      onAnimationComplete={() => setIsActive(false)}
    >
      {children}
    </motion.span>
  );
}
