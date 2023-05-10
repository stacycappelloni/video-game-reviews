import { useState } from "react"
import styled from "styled-components"
import Review from "./Review.js"

function navigateToForm(){
    location.href = "AddReview";
}

export default function ReviewList({data, error, mutate}){
    return <PageWrapper>
        <PageTitle>Video Game Reviews</PageTitle>
        <AddReviewButton onClick={() => navigateToForm()}>+ Add Review</AddReviewButton>
        <ListWrapper>
        {data.length > 0 ?
            (data.map((singleReview) => (
                <Review reviewData={singleReview} key={singleReview.title}>
                </Review>
            ))) : (
                <p>No reviews to display.</p>
            )}
        </ListWrapper>
    </PageWrapper>
}

const ListWrapper = styled.ol`
list-style: none;
display: flex;  
flex-wrap: wrap;
padding: 0`

const PageWrapper = styled.div`
padding-left: 40px;  
padding-right: 40px;`

const AddReviewButton = styled.button`
font-family: 'Press Start 2P';
padding: 10px;
margin-left: 15px;
background-color: #dac8e3`

const PageTitle = styled.h1`
font-family: 'Press Start 2P';
text-align: center`