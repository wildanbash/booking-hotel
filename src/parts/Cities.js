import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function Cities({ data }) {
  return data.map((cities, index1) => {
    console.log(data)
    if (cities.name.length === 0) return null;
    return (
      <section className="container" key={`cities-${index1}`}>
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium">{cities.name}</h4>
          <div className="container-grid">
            {cities.items.map((items, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`cities-${index1}-item-${index2}`}
                >
                  <Fade bottom delay={300 * index2}>
                    <div className="card">
                      {/* {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )} */}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={
                            items.imageId[0]
                              ? `${process.env.REACT_APP_HOST}/${items.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={items.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          href={`/properties/${items._id}`}
                          className="stretched-link d-block text-gray-800"
                        >
                          <h5 className="h4">{items.title}</h5>
                        </Button>
                        <span className="text-gray-500">
                          {items.city}
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </Fade>
      </section>
    );
  });
}
