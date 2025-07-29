import FeatureItem from "./FeatureItem";

export default function Features() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureItem
          icon="🧠"
          title="Smart Planning"
          description="Automatically organize tasks by priority and deadlines."
        />
        <FeatureItem
          icon="📅"
          title="Integrated Calendar"
          description="See all your tasks and events in a single timeline."
        />
        <FeatureItem
          icon="🔔"
          title="Reminders"
          description="Never miss a deadline with timely notifications."
        />
      </div>
    </div>
  );
}
