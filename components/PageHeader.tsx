import Image from "next/image";

interface PageHeader {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeader) {
  return (
    <div className="container text-center">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-muted-foreground mb-7 leading-6 font-light">
        {description}
      </p>
    </div>
  );
}
