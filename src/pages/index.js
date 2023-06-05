import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import logo from '../../static/img/green_logo.jpg'

function GreenLogo() {
    return <img src={logo} alt="Logo" className={logo}/>
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div>
      </div>
    </header>
  );
}

function GoldLine() {
    return (
        <div>
            <hr className="gold-line" />
        </div>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <GoldLine />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
