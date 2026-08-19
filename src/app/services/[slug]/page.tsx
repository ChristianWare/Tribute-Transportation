import { getService, serviceSlugs } from "@/data/services";
import ServiceArticle from "@/components/ServicesPage/ServiceArticle/ServiceArticle";
import FaqAccordion from "@/components/shared/FaqAccordion/FaqAccordion";
import { notFound } from "next/navigation";
import Nav from "@/components/shared/Nav/Nav";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import TheDifference from "@/components/HomePage/TheDifference/TheDifference";
import EveryTrip from "@/components/ServicesPage/EveryTrip/EveryTrip";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  return service
    ? { title: service.title, description: service.metaDescription }
    : {};
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return notFound();

  return (
    <main>
      <Nav background='white' />
      <ServiceArticle service={service} />
      <TheDifference />
      <EveryTrip />
      <FaqAccordion
        heading='Questions about this service'
        items={service.faqs}
      />
      <FinalCTA />
    </main>
  );
}
