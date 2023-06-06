import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'BroadRiver Assset Management',
    Svg: require('@site/static/img/undraw_business_deal_re_up4u.svg').default,
    description: (
      <>
        We hired Liam to help us find a new General Counsel and Chief Compliance Officer for our growing firm with 20 staff and US$1.5 billion under management at a particularly crucial time in the growth of our firm. As expected, Liam and his firm turned up many candidates and three, in particular, who were good fits for us. Liam was always prompt and efficient.
But what set him apart was his fine-tuned attention to the qualitative aspects of the assignment, particularly his judgment about about which candidate would be the best fit for the culture of our organization and would work best on personal basis with us and our senior staff. The hire has turned out excellently.
      </>
    ),
  },
  {
    title: 'Nagashima Ohno & Tsunematsu NY LLP',
    Svg: require('@site/static/img/Nagashima.svg').default,
    description: (
      <>
        Thank you for your dedicated support.
      </>
    ),
  },
  {
    title: 'Karen Clayton',
    Svg: require('@site/static/img/undraw_female_avatar_efig.svg').default,
    description: (
      <>
        I have had the pleasure of working with Liam on two contracts in the last 18 months. Liam's ability to build empathetic relationships with both candidates and clients gives him powerful insight into the human side of recruitment. Liam invested the time to understand the details of the role requirements and the working culture of the business matching this with the skill-set, experience and values of the candidate. It truly felt like a partnership working towards the right outcome for all involved and I would highly recommend Liam for your next role whether as a client or a candidate!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

export function GoldLine() {
    return (
        <div>
            <hr className="gold-line" />
        </div>
    );
}

export function Testimonial() {
    return (
        <div>
            <h1 className="testimonials">Testimonials</h1>
        </div>
    );
}