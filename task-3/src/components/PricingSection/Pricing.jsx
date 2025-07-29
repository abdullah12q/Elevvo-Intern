import PriceCard from "./PriceCard";

export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PriceCard
          title="Free"
          description="Basic features for personal use"
          price="0"
        />
        <PriceCard
          title="Pro"
          description="Advanced tools for professionals"
          price="9/mo"
        />
        <PriceCard
          title="Team"
          description="Collaboration tools for teams"
          price="29/mo"
        />
      </div>
    </div>
  );
}
