import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Nathaniel Manansala. I am a Software Engineer. I am a Student.</p>
        <hr></hr>
        <h4>1.  Introduce yourself.  What are your hobbies, favorite music, favorite food, and other things you can tell me about yourself?</h4>
        <p>I am Nathaniel V. Manansala. I am 20 years old. My hobbies are playing games, watching movies, and I also like to tinker with computer parts. Also my favorite music is Grace by Lewis Capaldi, and my favorite food is pizza.</p>
        <hr></hr>
        <h4>2.  Why did you take up IT?</h4>
        <p>With our technology being the future, I would like to advance in technology which is the whole reason I took the course.</p>
        <hr></hr>
        <h4>3.  What career do you see yourself exploring after graduation?</h4>
        <p>I very much like to explore web development and such</p>
        <hr></hr>
        <h4>4.  What do you expect to learn in this subject?</h4>
        <p>I would like to expand my knowledge about integration of systems..</p>
        <hr></hr>
        <h4>5.  What topics do you want to be discussed in this subject?</h4>
        <p>From the title of our subject, I would like it to discuss data management, optimize systems, web development and such.</p>
        <hr></hr>
        <p>
          This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}