import Link from "next/link";
import * as Chakra from "@chakra-ui/react";

function BackButton({ href: hrefProp, ...props }) {
  return (
    <Link href={hrefProp} {...props}>
      <Chakra.Button
        bgColor="#313131"
        _hover={{ bgColor: "#666666" }}
        color="#FFFFFF"
        position="absolute"
        top="0"
        left="0"
        mt={4}
        _focus={{ boxShadow: "none" }}
      >
        <Chakra.Icon boxSize={5} color="#FFFFFF" viewBox="5 0 20 20">
          <path
            fill="currentColor"
            d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
          />
        </Chakra.Icon>
        Back
      </Chakra.Button>
    </Link>
  );
}

export default BackButton;
