import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import data from "../../../data";

import './parallax.css'

const Parallax_info = ({ data_number}) => {
const alignCenter = { display: "flex", alignItems: "center" };
 
  
 
  return (
    <div>
      <div className="background" />

      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            ...alignCenter,
          }}
        >
          <div
            className="scrollText"
          >
            {data[data_number].title.map((point, i) => (
              <h1 key={i}>{point}</h1>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.4, end: 4 }}
          style={{
            ...alignCenter,
            position: "absolute"
          }}
        >
          <div className="card sticky">
            <img
              src={data[data_number].img}
              alt="neasden"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.5}
          className="info"
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
            position: "relative",
            zIndex: 4
          }}
        >
          <div className="card parallax white">
            <div className="outer-border">
              <div className="mid-border">
                <div className="inner-border">
                  <img src="../assets/locations/Information_layout/Parallax_ headings/facts_heading.png" alt="facts" className="heading" />
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
          className="info"
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
            position: "relative",
            zIndex: 4
          }}
        >
          <div className="card parallax white">
            <div className="outer-border">
              <div className="mid-border">
                <div className="inner-border">
                  <img src="../assets/locations/Information_layout/Parallax_ headings/activities_heading.png" alt="facts" className="heading" />
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
          className="info"
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
            position: "relative",
            zIndex: 4
          }}
        >
          <div className="card parallax white">
            <div className="outer-border">
              <div className="mid-border">
                <div className="inner-border">
                  <img src="../assets/locations/Information_layout/Parallax_ headings/location_heading.png" alt="facts" className="heading" />
                  <iframe
                    title="Hindu temple"
                    src={data[data_number].location}
                    allowFullScreen={true}
                    tabIndex="0"
                  ></iframe>
                  <img src="../assets/locations/Information_layout/footer.png" alt="facts" className="footer" />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Parallax_info;