import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ActivityCard.module.css';

export default function ActivityCard({ title, description, icon, link }) {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
