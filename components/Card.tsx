"use client";

import { Button } from "@/components/ui/button";
import { Card as CardBox } from "@/components/ui/card";
import { IconChevronLgRight } from "justd-icons";

interface PostType {
  id: number;
  title: string;
  content: string;
  description: string;
}
export function Card({ post }: { post: PostType }) {
  const { title, description } = post;

  return (
    <CardBox>
      <CardBox.Header>
        <CardBox.Title> {title}</CardBox.Title>
        <CardBox.Description>{description} </CardBox.Description>
      </CardBox.Header>
      <CardBox.Footer>
        <Button intent="plain" className={"h-4"}>
          Read more <IconChevronLgRight />
        </Button>
      </CardBox.Footer>
    </CardBox>
  );
}
