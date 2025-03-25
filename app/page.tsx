import { Container, Heading } from "@/components/ui";

export default function Home() {
  return (
    <Container constrained={true} className="bg-secondary py-5 mt-5 max-w-2">
      <Heading className="mt-4 mb-2">Home</Heading>
      <p>This is a simple example of a React component.</p>
    </Container>
  );
}
