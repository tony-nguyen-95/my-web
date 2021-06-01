import React from "react";
import { useSelector } from "react-redux";
import Particles from "react-tsparticles";

export default function Background() {
  const { selectedTheme } = useSelector((state) => state.ThemeReducer);

  let particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  let particlesLoaded = (container) => {};

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: selectedTheme.primaryColor,
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          fullScreen: {
            // zIndex: 1,
            enable: true,
            detectRetina: true,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                },
              },
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 30,
              },
              grab: {
                distance: 235,
              },
            },
          },
          motion: {
            disable: false,
          },
          particles: {
            color: {
              value: selectedTheme.secondaryColor,
            },
            links: {
              color: {
                value: selectedTheme.secondaryColor,
              },
              distance: 120,
              enable: true,
              opacity: 0.4,
            },
            move: {
              angle: {
                offset: 45,
                value: 90,
              },
              enable: true,
              speed: 1.8,
            },
            number: {
              density: {
                enable: true,
                area: 1050,
              },
            },
            opacity: {
              value: {
                min: 0.1,
                max: 0.5,
              },
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.1,
              },
            },
            size: {
              value: {
                min: 0.1,
                max: 7,
              },
              animation: {
                enable: true,
                speed: 20,
                minimumValue: 0.1,
              },
            },
          },
        }}
      />
    </div>
  );
}
