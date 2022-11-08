import './styles.css';
import Star from 'assets/images/star.svg';
import { Review } from 'types/review';
import { useState, useEffect } from 'react';

type Props = {
  reviews: Review[];
};

const ReviewListCard = ({ reviews }: Props) => {
  const [list, setList] = useState<Review[]>();

  useEffect(() => {
    setList(reviews);
  }, [reviews]);

  return (
    <div className="list-card-container container-fluid">
      {list?.map((review) => {
        return (
          <div key={review.id}>
            <div className="username-container">
              <img src={Star} alt="ícone" />
              <p>{review.user.name}</p>
            </div>
            <div className="review-text-container">
              <p>{review.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewListCard;
