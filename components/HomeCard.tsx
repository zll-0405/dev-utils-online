import Link from "next/link";
import { Button } from "./base/ButtonComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./base/CardComponent";

interface HomeCardProps {
  title: string;
  description: string;
  link: string;
}

export default function HomeCard({ title, description, link }: HomeCardProps) {
  return (
    <Card>
      <Link href={link} className="flex">
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Button variant="outline">Try it</Button>
        </CardContent>
      </Link>
    </Card>
  );
}
