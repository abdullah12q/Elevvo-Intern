export default function FeatureItem({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
