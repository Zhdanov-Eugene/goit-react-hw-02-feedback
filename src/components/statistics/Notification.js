import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Notification = ({ title }) => {
  return <p className={styles.notification}>{title}</p>;
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Notification;