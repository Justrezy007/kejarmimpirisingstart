import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import Hero from "./components/hero";
import Countdown from "./components/countdown";
import Description from "./components/description";
import Requirement from "./components/requirement";
import Map from "./components/map";
import FAQ from "./components/FAQ";
import Timeline from "./components/timeline";
import Link from "next/link";
import LiveCount from "./components/liveCount";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Fixed Whatsapp */}
      <a className="fixed z-30 bottom-7 shadow-lg cursor-pointer right-10 bg-base-100 w-16 h-16 flex justify-center items-center rounded-full">
        <BsWhatsapp className="w-8 h-8" />
      </a>
      <Hero />
      {/* <Countdown /> */}
      <Description />
      <Requirement />
      <h2 className="text-2xl text-center py-14 md:py-6 font-extrabold text-white dark:text-white sm:text-4xl bg-base-300">
        <span className="block">
        Daftar Berdasarkan Kotamu
        </span>
      </h2>
      <Map />
      <div className="bg-base-300 w-full flex flex-col justify-center items-center pt-6">
        <p className="text-center text-xl">Kuota Sudah Habis atau Bukan dari Kota di Atas?</p>
        <Link href="/register-online" className="btn bg-red-700 rounded-none border-none px-8 my-6 shadow-[0_10px_50px_rgba(185,_28,_28,_0.5)] hover:bg-primary/80 hover:shadow-none">Daftar Online di Sini</Link>
      </div>
      <Timeline />
      {/* <LiveCount /> */}
      <FAQ />
    </main>
  );
}
