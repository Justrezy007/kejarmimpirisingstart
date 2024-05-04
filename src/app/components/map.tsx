'use client'
import React,{useState, useEffect} from 'react'
import { getFirestore, collection, getDocs, doc} from 'firebase/firestore'
import {auth,app} from '@/app/firebase/config'

import Image from 'next/image'
import Card from './card'

const Map = () => {
  const [data, setData] = useState<any>([0,0,0])
  useEffect(()=>{
    const fetchData = async () => {
        try {
            const jakartaCollection = collection(getFirestore(app), 'jakarta');
            const jakartadoc = await getDocs(jakartaCollection)
            const jakartaLength = jakartadoc?.docs?.length ?? 0;
            const manadoCollection = collection(getFirestore(app), 'manado');
            const manadodoc = await getDocs(manadoCollection)
            const manadoLength = manadodoc?.docs?.length ?? 0;
            const jogjaCollection = collection(getFirestore(app), 'jogja');
            const jogjadoc = await getDocs(jogjaCollection)
            const jogjaLength = jogjadoc?.docs?.length ?? 0;

            const arr = [jakartaLength, manadoLength, jogjaLength]
            setData(arr)

        } catch (error) {
            console.error('Error fetching documents: ', error);
        }
      };
  
      fetchData();
},[])
  return (
    
    <div className='flex relative justify-center items-center w-full mx-auto py-12'>
      <div className='w-full h-full flex gap-5 justify-around items-center absolute top-0 left-0 px-4 md:px-32'>
        
        <Card city={"Yogyakarta"} img={'/jogja.jpg'} quota={75} tanggal={"Sabtu, 18 Mei 2024"} data={data[2]} place={'Defreshco Coffee & Bistro'} />
        <Card city={"Jakarta"} img={'/jakarta.jpg'} quota={150} tanggal={"Sabtu, 15 Juni 2024"} data={data[0]} place={'CIMB Niaga Icon Pondok Indah'}/>
        <Card city={"Manado"} img={'/manado.jpeg'} quota={75} tanggal={"Sabtu, 1 Juni 2024"} data={data[1]} place={'Bumi Beringin Drinks & Eatery'} />

      </div>
      <Image className='h-72' src={"/Map.svg"} alt='map' width={780} height={320} />
    </div>
  )
}

export default Map