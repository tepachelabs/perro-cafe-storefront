import {FC} from 'react';

import {CommunitySection, ReviewsContainer} from './community.styles';
import {ReviewCard} from '../../atoms/review-card';
import {ReviewCardVariant} from '../../atoms/review-card/review-card.styles';
import {Subtitle} from '../../molecules/subtitle';

type Review = {
  id: string;
  review: string;
  author: string;
};

interface Props {
  reviews: Review[];
}

const variants: ReviewCardVariant[] = ['orange', 'yellow', 'green'];

export const Community: FC<Props> = ({reviews}) => (
  <CommunitySection>
    <Subtitle icon="community">Comunidad</Subtitle>
    <ReviewsContainer>
      {reviews.map((review, i) => (
        <ReviewCard
          key={review.id}
          variant={variants[i % 3]}
          review={review.review}
          author={review.author}
        />
      ))}
    </ReviewsContainer>
  </CommunitySection>
);
