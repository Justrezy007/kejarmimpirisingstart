import React from 'react'
import Image from 'next/image'
import Card from './card'

const Map = () => {
  return (
    <div className='flex relative justify-center items-center w-full mx-auto py-8 bg-base-300'>
      <div className='w-full h-full flex justify-around items-center absolute top-0 left-0'>
        <Card city={"Jakarta"} img={'/jakarta.jpeg'} quota={150} />
        <Card city={"Manado"} img={'/manado.jpeg'} quota={75} />
        <Card city={"Malang"} img={'/malang.jpeg'} quota={75} />
        <Card city={"Palembang"} img={'/palembang.jpeg'} quota={75} />

      </div>
      <Image className='' src={"/Map.svg"} alt='map' width={780} height={320} />
    </div>
  )
}

export default Map