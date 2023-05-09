import styled from 'styled-components'
import Head from 'next/head'
import { Rating } from '@mui/material';

function navigateToMainPage(){
    location.href = "/"
}

export default function AddReview() {

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
        <InputForm>
            <FieldName>Game Title: </FieldName>
            <InputField></InputField>
            <FieldName>Rating: <Rating name="star-input" defaultValue={0} precision={0.5} /></FieldName>
            <FieldName>Game Platform: </FieldName>
            <ShortInputField></ShortInputField>
            <FieldName>Your Review:</FieldName>
            <LongInputField></LongInputField>
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

const InputForm = styled.div`
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

const FieldName = styled.h2`
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
width: 20ch;
padding: 5px;
border: solid #000 5px;`;

const LongInputField = styled.textarea`
font-family: 'Press Start 2P';
height: 3.5em;
width: 100%;
height: 10rem;
padding: 5px;
border: solid #000 5px`;