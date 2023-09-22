import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import scss from "./ParticlesContainer.module.scss";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engive: any) => {
    await loadFull(engive);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className={scss.particle}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        transform: "translateZ(0)",
      }}
      id={"tsparticles"}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
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
            value: "#058705",
          },
          links: {
            color: "#3f8700",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            // directions: "none",
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
            value: { min: 1, max: 5 },
          },
        },
      }}
    />
  );
};

export default ParticlesContainer;
