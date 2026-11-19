import { useState } from "react";
import { Star } from "lucide-react";

export function StarRating() {
    const [rating, setRating] = useState(0);

    return (
        <div className="star-rating">
            <h2>How was your experience?</h2>
            <p>Tap a star to rate your wash.</p>

            <div className="star-rating__stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        aria-label={`Rate ${star} stars`}
                    >
                        <Star
                            size={48}
                            fill={star <= rating ? "#fbbf24" : "none"}
                            color={star <= rating ? "#fbbf24" : "#64748b"}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}