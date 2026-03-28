export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Modern Construction Techniques for 2026",
    excerpt: "Explore the latest innovations in construction technology and methodologies that are transforming the industry.",
    content: "Modern construction has evolved significantly with new technologies and sustainable practices. From BIM integration to prefabrication, discover how Saathi Group stays ahead of industry trends...",
    author: "Arjun Kumar",
    date: "2026-03-25",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800",
    readTime: 5,
    tags: ["construction", "technology", "innovation"],
    featured: true,
  },
  {
    id: "2",
    title: "Sustainable Construction: Building a Green Future",
    excerpt: "Learn how sustainable building practices reduce environmental impact while improving project efficiency and cost savings.",
    content: "Sustainability in construction is no longer optional—it's essential. At Saathi Group, we implement eco-friendly materials and processes to build a better tomorrow for our clients and communities...",
    author: "Priya Sharma",
    date: "2026-03-20",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    readTime: 6,
    tags: ["sustainability", "green building", "environment"],
    featured: true,
  },
  {
    id: "3",
    title: "Project Spotlight: Residential Complex Completion",
    excerpt: "A behind-the-scenes look at how we successfully delivered a 500-unit residential project on time and within budget.",
    content: "Last month, we completed an ambitious residential development project. Discover the challenges we faced, the solutions we implemented, and the results that exceeded client expectations...",
    author: "Rajesh Patel",
    date: "2026-03-15",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800",
    readTime: 4,
    tags: ["projects", "residential", "success stories"],
  },
  {
    id: "4",
    title: "Safety Standards in Construction: Our Commitment",
    excerpt: "Understanding OSHA compliance and how Saathi Group maintains the highest safety standards on every project.",
    content: "Worker safety is our top priority. Learn about our comprehensive safety protocols, training programs, and how we've maintained a zero-incident record across all our projects...",
    author: "Vikram Singh",
    date: "2026-03-10",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
    readTime: 5,
    tags: ["safety", "compliance", "standards"],
  },
  {
    id: "5",
    title: "Digital Transformation in Construction Management",
    excerpt: "How AI and machine learning are revolutionizing project management and resource allocation in the construction industry.",
    content: "Digital tools are reshaping how we manage projects. From AI-powered scheduling to real-time progress tracking, explore the technologies that make Saathi Group more efficient...",
    author: "Sneha Gupta",
    date: "2026-03-05",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    readTime: 7,
    tags: ["technology", "AI", "digital"],
  },
  {
    id: "6",
    title: "Building Tomorrow: Trends in Commercial Construction",
    excerpt: "Discover emerging trends in commercial real estate and how modern office spaces are being designed for the future workforce.",
    content: "Commercial construction is evolving rapidly. From flexible workspaces to smart building technology, learn what's shaping the future of office environments and how we're building it...",
    author: "Amit Desai",
    date: "2026-02-28",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1487107492461-98f88704bbb2?w=800",
    readTime: 6,
    tags: ["commercial", "trends", "office design"],
  },
];

export const blogCategories = ["Technology", "Sustainability", "Projects", "Safety", "Trends"];

export default blogPosts;
