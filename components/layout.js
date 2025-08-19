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
        <p>Hello! My name is Henry Yeo Dela Cruz. I’m excited to share a little about myself. I enjoy sports 
          and going out for adventures with my friends, as these activities keep me active and allow me to make fun memories with the people around me. My favorite song is "Your Universe," which 
          inspires me and keeps me motivated. When it comes to food, I love beef caldereta because of its rich and delicious flavors. In five years, I see myself becoming successful and happy, with a 
          loving family by my side. I aim to continue growing both personally and professionally, and I look forward to building a bright and fulfilling future.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}