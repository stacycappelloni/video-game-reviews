import styled from 'styled-components'
import Head from 'next/head'
import ReviewList from "../components/ReviewList"
import useSWR from 'swr'
import {useState} from "react";

const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  const { data, mutate, error } = useSWR("/api", fetcher)

  if (!data){
    return <StyledText>loading...</StyledText>
  }
  if (error){
    return <StyledText>error!</StyledText>
  }

  return <>
    <Head>
      <title> Your Video Game Reviews </title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
    </Head>
    <ReviewList data={data} error={error} mutate={mutate}/> 
  </>
}

const StyledText = styled.h2`
font-family: 'Press Start 2P';
color: #fff;
font-weight: 400;
text-align: center;
`