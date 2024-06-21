import styles from './cookingCard.module.css';

type CookingCardProps = {
  image: string;
  altText: string;
};

function CookingCard({ image, altText }: CookingCardProps) {
  return (
    <div className={styles.container}>
      <img src={image} alt={altText} />
      <p>{altText}</p>
    </div>
  );
}

export default CookingCard;
