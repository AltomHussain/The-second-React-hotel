import React from "react";

export default function TouristInfoCards() {
  const citiesInfo = [
    {
      name: "London",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg",
      link: "visitlondon.com",
      description:
        "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations."
    },
    {
      name: "Manchester",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/Manchester_Montage_2017.jpg",
      link: "visitmanchester.com",
      description:
        "Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry."
    },
    {
      name: "Glasgow",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Glasgow_new_montage%2C_2017.jpg",
      link: "peoplemakeglasgow.com",
      description:
        "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera"
    }
  ];
  return (
    <div>
      {citiesInfo.map((city, index) => {
        return (
          <div className="card" key={index}>
            <img src={city.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{city.name}</h5>
              <p className="card-text">{city.description}</p>
              <a href={city.link} className="btn btn-primary">
                Visit City
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
