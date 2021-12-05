import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Point from "../components/point";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>European Theater</title>
        <meta
          name="description"
          content="Annotated Map of the Battles of the European Theater of World War II"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/map.jpg"
              alt="Map of Europe during World War II"
              width={1501}
              height={1051}
            />
            <Point
              x={713}
              y={343}
              name="German Invasion of Poland"
              url="/german-invasion-of-poland"
            />
            <Point
              x={330}
              y={315}
              name="Battle of Britain"
              url="/battle-of-britain"
            />
            <Point
              x={935}
              y={975}
              name="Battle of El Alamein"
              url="/battle-of-el-alamein"
            />
            <Point
              x={1150}
              y={360}
              name="Battle of Stalingrad"
              url="/battle-of-stalingrad"
            />
            <Point
              x={420}
              y={825}
              name="Battle of Kasserine Pass"
              url="/battle-of-kasserine-pass"
            />
            <Point
              x={1040}
              y={330}
              name="Battle of Kursk"
              url="/battle-of-kursk"
            />
            <Point
              x={570}
              y={660}
              name="Battle of Monte Cassino"
              url="/battle-of-monte-cassino"
            />
            <Point x={308} y={370} name="D-Day" url="/d-day" />
            <Point
              x={440}
              y={320}
              name="Operation Market Garden"
              url="/operation-market-garden"
            />
            <Point
              x={410}
              y={380}
              name="Battle of the Bulge"
              url="/battle-of-the-bulge"
            />
            <Point
              x={570}
              y={324}
              name="German Surrender"
              url="/german-surrender"
            />
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
