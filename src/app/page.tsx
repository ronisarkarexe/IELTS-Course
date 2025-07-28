import CourseHeroSection from "@/components/course-hero-section";
import FooterComponent from "@/components/footer";
import TopHeader from "@/components/header";
import HomeComponent from "@/components/home.component";
import { getProductData } from "@/lib/api";
import { ProductData } from "@/lib/model";
import { Metadata } from "next";

// for seo metadata
export async function generateMetadata(): Promise<Metadata> {
  const productData: ProductData = await getProductData();
  return {
    title: productData.seo.title,
    description: productData.seo.description,
    keywords: productData.seo.keywords,
    openGraph: {
      title: productData.seo.title,
      description: productData.seo.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: productData.seo.title,
      description: productData.seo.description,
    },
  };
}

export default async function Home() {
  const productData: ProductData = await getProductData();
  return (
    <div className="bg-white">
      <TopHeader />
      <CourseHeroSection
        title={productData.title}
        description={productData.description}
        media={productData.media}
      />
      <HomeComponent
        checklist={productData.checklist}
        ctaText={productData.cta_text}
        sections={productData.sections}
      />
      <FooterComponent />
    </div>
  );
}
