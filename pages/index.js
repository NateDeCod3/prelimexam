import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>KahitAnoBa</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Nathaniel. I am a Software Engineer.</p>
        <p>
          This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
          <br></br>
          <img src="https://media1.tenor.com/m/gnZcXcBonfUAAAAC/you-are-my-sunshine-lebron.gif" alt="You are my sunshine" />
        </p>
      </section>
    </Layout>
  );
}