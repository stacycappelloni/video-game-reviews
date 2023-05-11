import styled from 'styled-components';
import {useState} from "react";
import Head from 'next/head';
import { Rating } from '@mui/material';
import { title } from 'process';

function navigateToMainPage(){
    location.href = "/"
}

export default function AddReviewPage({data, error, mutate}) {
  const addReview = (newTitle, newStars, newPlatform, newReview) => {
      fetch('/api', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ title: newTitle, num_stars: newStars, platform: newPlatform, comment: newReview })
      })

      mutate([...data, {
        title: newTitle, 
        num_stars: newStars, 
        platform: newPlatform, 
        num_stars: newStars
        }], {
        optimisticData: [...data, {
          title: newTitle, 
          num_stars: newStars, 
          platform: newPlatform, 
          num_stars: newStars
        }], 
        rollbackOnError: true, 
        populateCache: true, 
        revalidate: false
    } )
  }


  function submitForm(e){
    e.preventDefault();
    addReview(titleValue, starValue, platformValue, reviewValue);
    location.href = "/"
  }

  const [titleValue, setTitleValue] = useState("");
  const [starValue, setStarValue] = useState(0);
  const [platformValue, setPlatformValue] = useState("");
  const [reviewValue, setReviewValue] = useState("");

  return <>
    <Head>
      <title> Add a Review </title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
    </Head>
    <PageWrapper>
        <PageTitle>Add A Review</PageTitle>
        <BackButton onClick={navigateToMainPage}>Back</BackButton>
        {/*referenced Material UI documentation -- https://mui.com/material-ui/react-rating/ */}
        <InputForm onSubmit={submitForm}>
            <FieldName htmlFor="title">Game Title: </FieldName>
            <LineSpacer></LineSpacer>
            <InputField id="title" value={titleValue} onChange={(e) => setTitleValue(e.target.value)}></InputField>

            <LineSpacer></LineSpacer>

            <FieldName htmlFor="stars">Rating: <Rating id="stars" name="star-input" defaultValue={0} value={starValue} onChange={(e) => setStarValue(e.target.value)}/></FieldName>
            
            <LineSpacer></LineSpacer>

            <FieldName htmlFor="platform">Game Platform: </FieldName>
            <LineSpacer></LineSpacer>
            <ShortInputField id="platform" value={platformValue} onChange={(e) => setPlatformValue(e.target.value)}></ShortInputField>

            <LineSpacer></LineSpacer>

            <FieldName htmlFor="review">Your Review:</FieldName>
            <LongInputField id="review" value={reviewValue} onChange={(e) => setReviewValue(e.target.value)}></LongInputField>
            <SubmitButton>Submit</SubmitButton>
        </InputForm>

    </PageWrapper>
  </>
}

const BackButton = styled.button`
font-family: 'Press Start 2P';
padding: 10px;
margin-left: 15px;
background-color: #dac8e3`

const PageTitle = styled.h1`
font-family: 'Press Start 2P';
text-align: center`

const InputForm = styled.form`
background-color: #fff;
min-width: fit-content;
height: 100%;
padding: 15px;
margin: 16px;
max-width: 1000px;

`

const PageWrapper = styled.div`
padding-left: 40px;  
padding-right: 40px;
`

const FieldName = styled.label`
font-family: 'Press Start 2P';
font-size: 1.40rem;
color: #000;`

const SubmitButton = styled.button`
font-family: 'Press Start 2P';
padding: 10px;
margin-left: 15px;
font-size: 1.35rem;
background-color: #170029;
color: #fff;`;

const InputField = styled.input`
font-family: 'Press Start 2P';
height: 3.5em;
width: 50ch;
padding: 5px;
border: solid #000 5px;`;

const ShortInputField = styled.input`
font-family: 'Press Start 2P';
height: 3.5em;
width: 25ch;
padding: 5px;
border: solid #000 5px;`;

const LongInputField = styled.textarea`
font-family: 'Press Start 2P';
height: 3.5em;
width: 100%;
height: 10rem;
padding: 5px;
border: solid #000 5px;`;

const LineSpacer = styled.div`
margin: 5px;`;