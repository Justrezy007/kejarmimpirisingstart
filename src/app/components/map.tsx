import React from 'react'
import Image from 'next/image'
import Card from './card'

const Map = () => {
  return (
    <div className='flex relative justify-center items-center w-full mx-auto py-12 bg-base-300'>
      <div className='w-full h-full flex gap-5 justify-around items-center absolute top-0 left-0 px-4 md:px-32'>
        <Card city={"Jakarta"} img={'/jakarta.jpeg'} quota={150} tanggal={"4 Mei - 10 Juni"} />
        <Card city={"Manado"} img={'/manado.jpeg'} quota={75} tanggal={"4 Mei - 14 Mei"} />
        <Card city={"Jogja"} img={'/malang.jpeg'} quota={75} tanggal={"4 Mei - 27 Mei"}/>

      </div>
      <Image className='h-72' src={"/Map.svg"} alt='map' width={780} height={320} />
    </div>
  )
}

export default Map