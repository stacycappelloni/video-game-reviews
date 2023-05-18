import styled from 'styled-components'
import Head from 'next/head'
import ReviewList from "../components/ReviewList"
import useSWR from 'swr'
import {useState} from "react";

const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  const { data, mutate, error } = useSWR("/api", fetcher)

  if (!data){
    return <StyledText>Loading...</StyledText>
  }
  if (error){
    return <StyledText>Error!</StyledText>
  }

  return <>
    <Head>
      <title> Your Video Game Reviews </title>
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