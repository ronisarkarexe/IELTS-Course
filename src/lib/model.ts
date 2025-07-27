export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: {
    cat_id: number;
    course_id: number;
    platform: string;
    skills_cat_id: number;
    slug: string;
  };
  start_at: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
  seo: SeoData;
  cta_text: {
    name: string;
    value: string;
  };
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: [];
  delivery_method: string;
}

export interface SeoMetaTag {
  content: string;
  type: "property" | "name";
  value: string;
}

export interface SeoSchema {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface SeoData {
  defaultMeta: SeoMetaTag[];
  title: string;
  description: string;
  keywords: string[];
  schema: SeoSchema[];
}

export interface MediaItem {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export type Section =
  | BundleItemsSection
  | OffersSection
  | InstructorsSection
  | FeatureSection
  | GroupJoinEngagementSection
  | PointersSection
  | ContentPreviewSection
  | AboutSection
  | FeatureExplanationsSection
  | FreeItemsSection
  | CertificateSection
  | BundleCertificateSection
  | TestimonialsSection
  | RequirementsSection
  | HowToPaySection
  | FaqSection;

export interface BaseSection {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
}

export interface BundleItemsSection extends BaseSection {
  type: "bundle_items";
  values: [];
}

export interface OffersSection extends BaseSection {
  type: "offers";
  values: OfferValue[];
}

export interface OfferValue {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

export interface InstructorsSection extends BaseSection {
  type: "instructors";
  values: InstructorSectionValue[];
}

export interface InstructorSectionValue {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface FeatureSection extends BaseSection {
  type: "features";
  values: FeatureSectionValue[];
}

export interface FeatureSectionValue {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface GroupJoinEngagementSection extends BaseSection {
  type: "group_join_engagement";
  values: GroupJoinEngagementValue[];
}

export interface GroupJoinEngagementValue {
  id: string;
  title: string;
  title_color: string;
  description: string;
  description_color: string;
  thumbnail: string;
  top_left_icon_img: string;
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    text: string;
    color: string;
    clicked_url: string;
  };
}

export interface PointersSection extends BaseSection {
  type: "pointers";
  values: PointersValue[];
}

export interface PointersValue {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface ContentPreviewSection extends BaseSection {
  type: "content_preview";
  values: [];
}

export interface AboutSection extends BaseSection {
  type: "about";
  values: AboutValue[];
}

export interface AboutValue {
  description: string;
  icon: string;
  id: string;
  title: string;
}

export interface FeatureExplanationsSection extends BaseSection {
  type: "feature_explanations";
  values: FeatureExplanationsValue[];
}

export interface FeatureExplanationsValue {
  checklist: string[];
  file_type: string;
  id: string;
  file_url: string;
  title: string;
  video_thumbnail: string;
}

export interface FreeItemsSection extends BaseSection {
  type: "free_items";
  values: [];
}

export interface CertificateSection extends BaseSection {
  type: "certificate";
  values: [];
}

export interface BundleCertificateSection extends BaseSection {
  type: "bundle_certificate";
  values: [];
}

export interface TestimonialsSection extends BaseSection {
  type: "testimonials";
  values: TestimonialsValue[];
}

export interface TestimonialsValue {
  description: string;
  name: string;
  id: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

export interface RequirementsSection extends BaseSection {
  type: "requirements";
  values: [];
}

export interface HowToPaySection extends BaseSection {
  type: "how_to_pay";
  values: [];
}

export interface FaqSection extends BaseSection {
  type: "faq";
  values: FaqValue[];
}

export interface FaqValue {
  answer: string;
  question: string;
  id: string;
}
