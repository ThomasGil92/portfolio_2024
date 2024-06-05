import { Button, Html } from "@react-email/components";

export default function ContactEmail(props:{firstName:string,lastName:string,files:string}) {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
      <p>{props.firstName}</p>
    </Html>
  );
}
