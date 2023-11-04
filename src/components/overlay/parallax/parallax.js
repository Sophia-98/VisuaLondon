import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./parallax.css";

import data from "../../../data";

export default function App({ data_number }) {
  const alignCenter = { display: "flex", alignItems: "center" };

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const stickyThreshold = 1150; //

  React.useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSticky = screenWidth > stickyThreshold;

  return (
    <div>
      <div className="background" />

      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            ...alignCenter,
            justifyContent: "center",
            position: "absolute",
            zIndex: 2
          }}
        >
          <div className="scrollText">
            {data[data_number].title.map((point, i) => (
              <h1 key={i}>{point}</h1>
            ))}
          </div>
        </ParallaxLayer>

        {isSticky ? (
          <ParallaxLayer
            sticky={{ start: 0, end: 3 }}
            style={{
              ...alignCenter,
              marginLeft: "7em",
              zIndex: "-10"
              
            }}
          >
            <div className="sticky">
              <img src={data[data_number].img} alt={data[data_number].title}/>
            </div>
          </ParallaxLayer>
        ) : (
          <ParallaxLayer
            offset={1}
            speed={2.5}
            style={{
              ...alignCenter,
              justifyContent: "center",
              position: "relative",
              zIndex: 4
            }}
          >
            <div className="sticky">
              <img src={data[data_number].img} alt={data[data_number].title} />
            </div>
          </ParallaxLayer>
        )}
        <ParallaxLayer
          offset={1}
          speed={1.5}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
            position: "relative",
            zIndex: 4
          }}
        >
          <div className="card white">
            <div className="outer-border">
              <div className="mid-border">
                <div className="inner-border">
                  <img
                    src="../assets/locations/Information_layout/Parallax_headings/facts_heading.png"
                    alt="facts"
                    className="heading"
                  />
                  <ul>
                    {data[data_number].facts.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
            position: "relative",
            zIndex: 4
          }}
        >
          <div className="card white">
            <div className="outer-border">
              <div className="mid-border">
                <div className="inner-border">
                  <img
                    src="../assets/locations/Information_layout/Parallax_headings/activities_heading.png"
                    alt="facts"
                    className="heading"
                  />
                  <ul>
                    {data[data_number].activities.map((point, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.9}
          speed={1.5}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
            position: "relative",
            zIndex: 4
          }}
        >
          <div className="card white">
            <div className="outer-border">
              <div className="mid-border">
                <div className="inner-border">
                  <img
                    src="../assets/locations/Information_layout/Parallax_headings/location_heading.png"
                    alt="facts"
                    className="heading"
                  />
                  <iframe
                    title="Hindu temple"
                    src={data[data_number].location}
                   
                  ></iframe>
                  <img src="../assets/locations/Information_layout/Parallax_headings/footer.png" alt="facts" className="footer" />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
