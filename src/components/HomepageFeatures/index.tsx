import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'From Feedback to Fix',
    icon: '💬',
    description: (
      <>
        Centralize player feedback from Discord, forms, and reviews. 
        AI surfaces themes, quotes, and actionable insights—so you spend 
        less time reading and more time fixing.
      </>
    ),
  },
  {
    title: 'See What Players Did',
    icon: '🗺️',
    description: (
      <>
        Connect the UE5 plugin to capture heatmaps and replay windows. 
        Jump straight to the level and moment that needs work, with 
        spatial context your team can inspect.
      </>
    ),
  },
  {
    title: 'AI-Powered Investigations',
    icon: '🔍',
    description: (
      <>
        Ask any game dev question and get game-specific answers. 
        Start an investigation to generate hypotheses, missing evidence, 
        and a capture plan for your next playtest.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureIcon}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
