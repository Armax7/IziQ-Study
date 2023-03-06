import style from "../styles/index.module.css";

export default function Landing() {
  return (
    <div className={style.containerSections}>
      <section className={style.sectionOne}>
        <div className={style.sectionOne_one}></div>
        <div className={style.sectionOne_two}>
          <div className={style.containerOne_twoData}>
            <h1>Learn Easy</h1>
            <h3>Acquire knowledge with flash-cards</h3>
            <button>Join Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
