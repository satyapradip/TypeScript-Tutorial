interface ChaiCardProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  rating?: number;
  onSelect?: (id: number) => void;
}

function ChaiCard({
  id,
  name,
  description,
  imageUrl,
  rating,
  onSelect,
}: ChaiCardProps) {
  return (
    <div className="chai-card">
      <img src={imageUrl} alt={name} className="chai-card-image" />
      <h2 className="chai-card-name">{name}</h2>
      <p className="chai-card-description">{description}</p>
      <p className="chai-card-rating">{rating ? `Rating: ${rating}` : "No rating yet"}</p>
      <button type="button" className="chai-card-button" onClick={() => onSelect?.(id)}>
        Choose This Chai
      </button>
    </div>
  );
}

export default ChaiCard;