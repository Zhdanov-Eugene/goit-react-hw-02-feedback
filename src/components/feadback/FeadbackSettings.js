import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeadbackSettings.module.css';

const FeadbackSettings = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(element => {
        return (
          <button
            type="button"
            className={styles.button}
            key={element}
            onClick={() => onLeaveFeedback(element)}
          >
            {element.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

FeadbackSettings.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeadbackSettings;