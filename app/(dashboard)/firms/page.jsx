'use client'
import { useState } from "react"
import Head from '@/app/ui/head';

export default function Page(){
    let Range = useState(20);
    let Search = useState("");

    return(
        <>
        <Head Range={Range} Search={Search} Title={'Firms'}/>
        </>
    )
}