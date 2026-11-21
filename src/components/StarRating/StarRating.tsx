import { useState } from "react";
import { Star } from "lucide-react";
import './StarRating.css'
export function StarRating() {
    const [rating, setRating] = useState(0);
    const stars = [1, 2, 3, 4, 5].map((star) => (
        <button
            key={star}
            onClick={() => setRating(star)}
            aria-label={`Rate ${star} stars`}
        >
            <Star
                size={48}
                color="#f5f109"
                fill={star <= rating ? "#f5f109" : "none"}
            />

        </button>
    ));
    console.log(stars);

    return (
        <div className="star-rating">
            <h2>How was your experience?</h2>
            <p>Tap a star to rate your wash.</p>
            <div className="star-rating-stars">
                {stars}
            </div>
        </div>
    );
}