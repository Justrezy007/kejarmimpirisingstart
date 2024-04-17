'use client'
import React,{useState, useEffect} from 'react'
import { getFirestore, collection, getDocs, doc} from 'firebase/firestore'
import {auth,app} from '@/app/firebase/config'

const LiveCount = () => {
    const [data, setData] = useState<any>([])

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

        <div className="flex-wrap items-center justify-center gap-8 pb-12 text-center sm:flex">
            <div className="w-full px-4 py-4 mt-12 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 bg-gray-800">
                <h3 className="py-2 text-2xl font-semibold  sm:text-xl text-white">
                    Kota Jakarta
                </h3>
                <p className="py-2 text-md text-gray-100">
                    <p className='text-5xl font-bold'>{75 - data[0] > 0 ? 75 - data[0]: 0}</p> <p className='mt-3'>Kuota Offline Tersedia</p>
                </p>
            </div>
            <div className="w-full px-4 py-4 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 md:-mt-12 mt-12 bg-gray-800">
                <h3 className="py-2 text-2xl font-semibold  sm:text-xl text-white">
                    Kota Manado
                </h3>
                <p className="py-2 text-md text-gray-100">
                    <p className='text-5xl font-bold'>{75 - data[1] > 0 ? 75 - data[1]: 0}</p> <p className='mt-3'>Kuota Offline Tersedia</p>
                </p>
            </div>
            <div className="w-full px-4 py-4 mt-12 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 bg-gray-800">
                <h3 className="py-2 text-2xl font-semibold  sm:text-xl text-white">
                    Kota Jogja
                </h3>
                <p className="py-2 text-md text-gray-100">
                    <p className='text-5xl font-bold'>{150 - data[2] > 0 ? 150 - data[2]: 0}</p> <p className='mt-3'>Kuota Offline Tersedia</p>
                </p>
            </div>
        </div>

    )
}

export default LiveCount