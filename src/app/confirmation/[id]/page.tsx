'use client'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { auth, app } from '@/app/firebase/config'
import { getFirestore, collection, Timestamp, doc, updateDoc } from 'firebase/firestore'
import Loading from '@/app/components/loading';

interface ConfirmationUIDProps {
    params: {
        id: string;
    };
}

const ConfirmationUID = ({ params }: ConfirmationUIDProps) => {
    const [isVerified, setIsVerified] = useState(false)
    useEffect(() => {
        const verify = async () => {
            const dataCollection = collection(getFirestore(app), 'user');
            const dataDoc = doc(dataCollection, params.id)
            await updateDoc(dataDoc, { verified: 'true' })
        }
        try {
            verify();
            setIsVerified(true)
        }
        catch (err) {
            setIsVerified(false)
            console.log(err)
        }

    }, [])
    return (
        <div className='flex flex-col justify-center items-center'>
            {isVerified ?
                <>
                    <h1 className='pt-16 text-3xl font-semibold my-8'>Registrasi Berhasil!</h1>
                    <img className='w-3/12 mt-16' src={'/Register.svg'} />
                </>
                :
                <Loading />
            }

        </div>
    )
}

export default ConfirmationUID