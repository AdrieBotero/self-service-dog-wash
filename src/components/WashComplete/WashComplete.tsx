import { CircleCheck } from "lucide-react";
import "./WashComplete.css";
import { StarRating } from "../StarRating/StarRating";

export function WashComplete() {
    return (
        <div className="wash-complete">
            <CircleCheck size={80} />
            <h1>Wash Complete!</h1>
            <StarRating />
        </div>
    );
}