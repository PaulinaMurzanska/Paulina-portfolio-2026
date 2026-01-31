export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
  features: string[];
  color: string;
  gradient: string;
  year: string;
  duration: string;
  role: string;
  projectImage: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-platform-migration",
    title: "E-commerce Platform Migration",
    shortDescription:
      "Led the front-end migration from legacy platform to Shopify Hydrogen, implementing modern React patterns and GraphQL integration.",
    fullDescription:
      "A comprehensive migration project transforming an outdated e-commerce platform into a modern, high-performance Shopify Hydrogen storefront. The project involved rebuilding the entire front-end architecture while maintaining business continuity and improving the overall user experience.",
    challenge:
      "The client was struggling with a legacy e-commerce platform that had slow load times, poor mobile experience, and limited customization options. The existing codebase was difficult to maintain and couldn't support the growing business needs.",
    solution:
      "Designed and implemented a completely new front-end using Shopify Hydrogen and Next.js. Created a component library for consistent UI across the platform. Implemented server-side rendering for improved SEO and performance. Built custom GraphQL queries for optimized data fetching.",
    impact:
      "Achieved 60% improvement in page load times, 40% increase in mobile conversion rates, and significantly reduced maintenance overhead. The new platform supports easy A/B testing and rapid feature deployment.",
    tech: ["Next.js", "Shopify Hydrogen", "TypeScript", "GraphQL", "Tailwind CSS", "React Query"],
    features: [
      "Server-side rendering for optimal SEO",
      "Custom product filtering and search",
      "Real-time inventory management",
      "Multi-currency support",
      "Wishlist and saved items functionality",
      "Optimized checkout flow",
    ],
    color: "var(--accent-1)",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
    year: "2023",
    duration: "8 months",
    role: "Lead Front-end Developer",
    projectImage: "/images/projects/ecommerce-migration.jpg",
  },
  {
    id: 2,
    slug: "enterprise-dashboard",
    title: "Enterprise Dashboard",
    shortDescription:
      "Developed a comprehensive business dashboard with real-time NetSuite integration and complex data visualization.",
    fullDescription:
      "A powerful enterprise dashboard providing real-time visibility into business operations through seamless NetSuite ERP integration. The platform enables executives and managers to make data-driven decisions with interactive visualizations and automated reporting.",
    challenge:
      "The client needed a unified view of their business data spread across multiple systems. Manual reporting was time-consuming and prone to errors. Decision-makers lacked real-time insights into critical business metrics.",
    solution:
      "Built a React-based dashboard with custom RESTful integration with NetSuite. Implemented real-time data synchronization and caching strategies. Created interactive charts and visualizations using D3.js and Recharts. Developed role-based access control for different user levels.",
    impact:
      "Reduced reporting time by 80%, enabled real-time decision making, and improved data accuracy. The dashboard now serves 50+ daily active users across the organization.",
    tech: ["React", "TypeScript", "NetSuite", "REST APIs", "Tailwind CSS", "D3.js", "Recharts"],
    features: [
      "Real-time data synchronization",
      "Interactive data visualizations",
      "Customizable dashboard layouts",
      "Automated report generation",
      "Role-based access control",
      "Export to PDF and Excel",
    ],
    color: "var(--accent-2)",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    year: "2024",
    duration: "6 months",
    role: "Senior Front-end Developer",
    projectImage: "/images/projects/enterprise-dashboard.jpg",
  },
  {
    id: 3,
    slug: "multi-brand-cms",
    title: "Multi-brand CMS Platform",
    shortDescription:
      "Built a flexible content management system supporting multiple brands with dynamic page building capabilities.",
    fullDescription:
      "A sophisticated multi-tenant CMS platform enabling marketing teams to manage content across multiple brands from a single interface. The system features a visual page builder, asset management, and advanced publishing workflows.",
    challenge:
      "Managing content for multiple brands was fragmented across different systems. Marketing teams struggled with inconsistent branding and slow content publishing. There was no central place to manage shared assets and components.",
    solution:
      "Developed a Vue.js and Nuxt-based CMS with Contentful as the headless backend. Created a drag-and-drop page builder with reusable components. Implemented brand-specific theming and asset management. Built approval workflows and scheduled publishing.",
    impact:
      "Reduced content publishing time by 70%, ensured brand consistency across all properties, and enabled marketing teams to work independently without developer assistance.",
    tech: ["Vue.js", "Nuxt", "Contentful", "SCSS", "Node.js", "GraphQL"],
    features: [
      "Visual drag-and-drop page builder",
      "Multi-brand theming system",
      "Asset library with search",
      "Content scheduling and workflows",
      "Version control and rollback",
      "SEO optimization tools",
    ],
    color: "var(--accent-3)",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
    year: "2024",
    duration: "10 months",
    role: "Front-end Developer",
    projectImage: "/images/projects/multi-brand-cms.jpg",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
