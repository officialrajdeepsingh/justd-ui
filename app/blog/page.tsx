import { Card } from "@/components/Card";
import { Container, Heading } from "@/components/ui";
import { posts } from "@/utils/posts";
export default async function Blog() {
  return (
    <Container constrained={true} className="py-5">
      <Heading className="mt-4 mb-2 text-center ">Our Latest Articles</Heading>
      <Heading className="text-center" level={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Heading>
      <div className="container mx-auto my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
}
