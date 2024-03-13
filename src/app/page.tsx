import Image from "next/image";
import Hero from "./components/hero";
import Countdown from "./components/countdown";
import Description from "./components/description";
import Requirement from "./components/requirement";
import Map from "./components/map";
import FAQ from "./components/FAQ";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Description />
      <Requirement />
      <h2 className="text-3xl text-center py-6 font-extrabold text-black dark:text-white sm:text-4xl bg-base-300">
        <span className="block">
        Daftar Berdasarkan Kotamu
        </span>
      </h2>
      <Map />
      <div className="bg-base-300 w-full flex flex-col justify-center items-center pt-6">
        <p className="text-center text-xl">Kuota Sudah Habis Atau Bukan Dari Kota Di Atas?</p>
        <button className="btn bg-red-700 rounded-none border-none px-8 my-6 shadow-[0_10px_50px_rgba(185,_28,_28,_0.5)] hover:bg-primary/80 hover:shadow-none">Daftar Online Disini</button>
      </div>
      <Timeline />
      <FAQ />
    </main>
  );
}
