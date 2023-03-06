import { useRouter } from "next/router";
import { CardContainer } from "../../../components";

function Decks() {
  const router = useRouter();
  const { id } = router.query;

  {/* This is /decks/{id} */}

  return (
    <div>      
      <CardContainer />
    </div>
  );
}

export default Decks;
