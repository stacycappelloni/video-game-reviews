import styled from 'styled-components'
import Head from 'next/head'
import AddReviewPage from "../components/AddReviewPage"
import useSWR from 'swr'
import {useState} from "react";

const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  const { data, mutate, error } = useSWR("/api", fetcher)

  if (!data){
    return <p>loading...</p>
  }
  if (error){
    return <p>error!</p>
  }

  return <>
    <Head>
      <title> Your Video Game Reviews </title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
    </Head>
    <AddReviewPage data={data} error={error} mutate={mutate}/> 
  
  </>
}