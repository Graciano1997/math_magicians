import style from '../styles/Home.module.css';

const Home = () => (
  <section className={style.mainContainer}>
    <h1>Welcome to our Page!</h1>
    <div className={style.content}>
      <strong>
        Math Magicians is the web App that helps you
        to realize calculations operations and a touch of inspiration!
      </strong>
      <p>With a sleek design and friendly UI.</p>
      <p>Offering a very simple and powerfull calculator</p>
      <p>Enjoy thought-provoking quotes for that extra motivation.</p>
      <p>Embrace your inner math magician today – let&apos;s make math fun!</p>
    </div>
  </section>
);

export default Home;
