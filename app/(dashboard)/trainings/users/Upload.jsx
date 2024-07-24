'use client'
import { useState, useEffect } from "react";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline"
import { postFile } from "@/app/lib/data"
import File from '@/app/ui/File';

export default function Upload({control, csv, setCSV}){
    
    return(
        <div className="bg-white w-[80%] md:w-1/2 lg:w-1/3 2xl:w-[20%] py-1 px-4 rounded-lg">
            <div className="flex w-full mx-2 mb-4 justify-between items-center border-b-2 py-3">
                <span className="font-semibold">Upload Spreadsheet</span>
                <XMarkIcon className="w-8 h-8" onClick={e=>control('')} />
            </div>
            <div>
                <h6 className='text-xl mb-4'>Upload Spreadsheet</h6>
                <File files={csv} setFiles={setCSV}/>
            </div>
        </div>
    )
}