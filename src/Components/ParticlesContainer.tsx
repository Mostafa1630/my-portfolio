import { useCallback } from "react";
import { Particles, ParticlesProps } from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine"; // Import Engine type for typing

const ParticlesContainer = () => {
  // Initialize the particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // Particles loaded callback (currently unused)
  const particlesLoaded = useCallback(async () => {}, []);

  // Define options for the particles
  const particlesOptions: ParticlesProps["options"] = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 90,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#e68e2e",
      },
      links: {
        color: "#f5d393",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {
          min: 1,
          max: 5,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesContainer;
