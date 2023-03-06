import { useRouter } from "next/router";

function Decks() {
  const router = useRouter();
  const { id } = router.query;

  return (
  <div>This is /decks/{id}</div>
  );
}

export default Decks;
