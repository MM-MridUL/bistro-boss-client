import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// Add publishable key
const stripePromise = loadStripe('');

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subheading="Please pay to eat"></SectionTitle>
            <div>
                <h2 className="text-4xl">Teke opakhi tumi uira uira aso</h2>
            </div>
        </div>
    );
};

export default Payment;