import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = props => {
  return (
    <div className={styles.statistics}>
      <p>
        Good <span className={styles.item}>{props.good}</span>
      </p>
      <p>
        Neutral <span className={styles.item}>{props.neutral}</span>
      </p>
      <p>
        Bad <span className={styles.item}>{props.bad}</span>
      </p>
      <p>
        Total <span className={styles.item}>{props.total}</span>
      </p>
      <p>
        Positive feedback{' '}
        <span className={styles.item}>{props.positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;