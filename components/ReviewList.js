import { useState } from "react"
import styled from "styled-components"
import Review from "./Review.js"

function navigateToForm(){
    location.href = "AddReview";
}

export default function ReviewList({data, error, mutate}){
    // Referenced: https://stackoverflow.com/questions/5416767/get-selected-value-text-from-select-on-change
    const [isFiltered, setIsFiltered] = useState(false);
    const [filterStars, setFilterStars] = useState(-1);

    function setFilter(event){
        var value = parseInt(event.target.value);
        if (value >= 0){
            setIsFiltered(true);
            setFilterStars(parseInt(value));
        }
        else{
            setIsFiltered(false);
        }
    }

    function filterByStars(numData){
        return numData.num_stars === filterStars;
    }

    return <PageWrapper>
        <PageTitle>Video Game Reviews</PageTitle>
            <Toolbar>
            <AddReviewButton onClick={() => navigateToForm()}>+ Add Review</AddReviewButton>
            {/* referenced: https://www.w3schools.com/tags/tag_select.asp */}
            <FilterWrapper>
                <FilterLabel htmlFor="stars">Filter:</FilterLabel>
                <SelectFilter name="stars" id="stars" onChange={setFilter}>
                    <option value="-1">All</option>
                    <option value="0">No Stars</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                    <option value="4">★★★★</option>
                    <option value="5">★★★★★</option>
                </SelectFilter>
            </FilterWrapper>
        </Toolbar>
        <ListWrapper id="the-reviews">
        {data ? (data.length > 0) ?
            (isFiltered) ? (data.filter(filterByStars).length > 0 ? data.filter(filterByStars).map((singleReview) => (

                <Review reviewData={singleReview} key={singleReview.title}></Review>  
            )) : <NoReviewsText>No reviews to display.</NoReviewsText>) : (data.map((singleReview) => (
                 <Review reviewData={singleReview} key={singleReview.title}>
                </Review>
                ))) : (
                <NoReviewsText>No reviews to display.</NoReviewsText>
            ) : []}
            
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
padding-right: 40px;
width: 100%;
`

const AddReviewButton = styled.button`
font-family: 'Press Start 2P';
padding: 10px;
margin-left: 10px;
background-color: #dac8e3`

const PageTitle = styled.h1`
font-family: 'Press Start 2P';
text-align: center; 
margin-bottom: 18px;`

const FilterLabel = styled.label`
font-family: 'Press Start 2P';
color: #fff;`

const SelectFilter = styled.select`
font-family: 'Press Start 2P';
position: relative;
background-color: #fff;
padding: 10px;`

const FilterWrapper = styled.span`
padding-left: 15px;
padding-top: 15px;`

const NoReviewsText = styled.h2`
font-family: 'Press Start 2P';
color: #fff;
font-weight: 400;
margin-left: 15px;
`

const Toolbar = styled.div`
display: flex;    
align-items: baseline;  
flex-wrap: wrap;`