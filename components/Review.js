import styled from "styled-components"

//referenced Material UI documentation -- https://mui.com/material-ui/react-rating/
import { Rating } from '@mui/material';

export default function Review({ reviewData }){
    return(<ReviewItem key={reviewData.id}>
        <GameTitle>{reviewData.title} ({reviewData.platform})</GameTitle>
        <Rating name="read-only-stars" value={reviewData.num_stars} size="large" precision={0.5} readOnly />
        <ReviewComment>{reviewData.comment}</ReviewComment>
    </ReviewItem>)
}

const ReviewItem = styled.li`
  flex: 1;
  height: fit-content;
  flex-basis: 400px;
  background-color: #fff;
  color: #000;
  margin: 0.55rem;
  padding: 15px;
  overflow: hidden;
  max-width: 45rem;
`;

const GameTitle = styled.h2`
font-family: 'Press Start 2P';
font-size: 1.40rem`

const ReviewComment = styled.p`
font-family: 'Press Start 2P';
font-size: 1.15rem`