import { useEffect, useState } from "react";
import style from "../styles/index.module.css";

import * as SupaHelpers from "../pages/api/supabase_helpers";
import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();
  const [loggStatus, setLoggStatus] = useState(false);

  useEffect(async () => {
    const statusLogged = await SupaHelpers.get.loggedStatus();
    setLoggStatus(statusLogged);
    if (loggStatus) await router.push("/home");
  }, [loggStatus]);

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
