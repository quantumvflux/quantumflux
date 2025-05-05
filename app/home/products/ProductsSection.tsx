import { Heading } from "@/app/components/Heading";
import { Section } from "@/app/components/Section";
import { ProductCard } from "./productCard/ProductCard";

export const ProductsSection = () => {
  return (
    <Section>
      <Heading text="my product:" />
      <div className="flex justify-center xl:justify-start flex-wrap items-center gap-4">
        <ProductCard />
      </div>
    </Section>
  );
};
