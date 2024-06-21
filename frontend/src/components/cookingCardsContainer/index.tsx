import oven from '../../assets/oven.svg';
import microwave from '../../assets/microwave.svg';
import stove from '../../assets/stove.svg';
import CookingCard from '../cookingCard';
import styles from './cookingCardsContainer.module.css';

function CookingCardsContainer() {
  return (
    <div className={styles.container}>
      <CookingCard image={oven} altText="Forno" />
      <CookingCard image={microwave} altText="Microondas" />
      <CookingCard image={stove} altText="Fogão" />
    </div>
  )
}

export default CookingCardsContainer;