import * as Chakra from "@chakra-ui/react";

function LoadingScreen() {
  return (
    <Chakra.Box m={"auto"}>
      <Chakra.Image src={"/study.png"} m={"auto"} />
      <Chakra.Center>
        <Chakra.Heading size={"3xl"}>Loading...</Chakra.Heading>
        <Chakra.Spinner size={"xl"} color={"white"} />
      </Chakra.Center>
    </Chakra.Box>
  );
}

export default LoadingScreen;
