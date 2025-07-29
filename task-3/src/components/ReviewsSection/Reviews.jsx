import ReviewQuote from "./ReviewQuote";

export default function Reviews() {
  return (
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-8">What Users Say</h2>
      <ReviewQuote title="TaskFlow changed how I work every day. Super intuitive! - Abdullah" />
      <ReviewQuote title="I finally feel in control of my tasks. A must-have. - Mohamed" />
      <ReviewQuote title="Best productivity app I've tried. 10/10. - Emad" />
    </div>
  );
}
