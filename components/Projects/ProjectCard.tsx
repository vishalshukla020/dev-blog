import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard: React.FC = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="my-4 lg:mx-4 p-6 bg-lightNavy text-slate rounded-xl cursor-pointer relative"
    >
      <div className="mb-5">
        <Image
          alt="github-icon"
          src="/images/icons8-github.svg"
          height="40"
          width="40"
        />
      </div>
      <h3 className="h1 font-bold mb-4 text-lightSlate">1. Flappy bird</h3>

      <p className="para child:pr-5">
        Clone of the original Flappy bird game implemented using react-native,
        matter-js and react-native-game-engine.
        <br />
        <br />
        <Link href="#">
          <span className="text-green cursor-pointer font-semibold">
            Casestudy
          </span>
        </Link>
        <Link href="#">
          <span className="text-green cursor-pointer font-semibold">
            Open link
          </span>
        </Link>
      </p>
    </motion.div>
  );
};

export default ProjectCard;
