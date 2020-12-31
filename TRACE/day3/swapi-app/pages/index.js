import Head from "next/head";
import react from "react";
import axios from "axios";

import Planet from "../components/Planet";

export default function Home() {
  const [fPlanets, setFPlanet] = react.useState([]);

  const isNotUnknown = (planet) => {
    return planet.population != "unknown";
  };

  react.useEffect(async () => {
    let requestURL = "https://swapi.dev/api/planets/";
    let allPlanets = [];
    let planets;
    while (requestURL != null) {
      const res = await axios(requestURL);
      planets = res.data.results.filter(isNotUnknown);
      allPlanets = allPlanets.concat(planets);
      requestURL = res.data.next;
    }

    setFPlanet(allPlanets);
  }, []);

  return (
    <div className="bg-black text-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className="text-5xl">Star Wars Planets</h1>
      {fPlanets.map((planet) => {
        return <Planet name={planet.name} population={planet.population} />;
      })}
    </div>
  );
}
