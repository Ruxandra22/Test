import { StrategiesForm } from './components/strategies-form/strategies-form';
import { StrategyList } from './components/strategies-list/strategies.list';
import './globals.scss';
import styles from './page.module.scss';

//TODO testing
const Home = () => {
  return (
    <div
      className={`${styles.main} d-flex justify-content-between align-items-top`}
    >
      <div className={styles.strategies}>
        <h1>Life Strategies</h1>
        <StrategiesForm />
      </div>

      <div className={styles.graph}>
        <h1>The Graph</h1>
      </div>
    </div>
  );
};

export default Home;
