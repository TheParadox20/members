'use client'

import { useState } from 'react'
import Link from 'next/link';
import File from '@/app/ui/File'
import { Institutions } from '@/app/ui/Input'

export default function EducationPage(){
    let [requirements, setRequirements] = useState([]);
    let [institutions, setInstitutions] = useState([{}]);

    return(
        <div className='min-h-[60vh] p-10'>
            <h3 className='mb-7 text-secondary text-lg 2xl:text-xl'>Education</h3>
            <Institutions data={institutions} setData={setInstitutions}/>

            <h1 className='text-xl font-medium mx-2 py-2 border-b-2 my-8'>Upload Documents</h1>
            <div className='mx-2 md:w-1/3 md:mx-auto my-5'>
                <File files={requirements} setFiles={setRequirements} type={'all'}/>
            </div>
            
            <div className="flex justify-between mt-8">
                <Link href={'/register/bio'} className='flex items-center gap-1'>
                    <span className='icon-[grommet-icons--previous] w-5 h-5'/>
                    Previous
                </Link>
                <Link href={'/register/preview'} className='flex items-center gap-2 bg-primary text-white hover:bg-secondary px-10 py-2 rounded-md hover:font-semibold'>
                    Preview
                    <span className='icon-[tabler--player-track-next-filled] w-5 h-5'/>
                </Link>
            </div>
        </div>
    )
}