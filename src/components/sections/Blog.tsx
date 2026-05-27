import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Navigating Nigeria's New Electricity Act",
    excerpt: "What the new regulations mean for homeowners and businesses looking to switch to solar energy in Lagos.",
    date: "May 15, 2024",
    author: "Engr. Chinelo Obi",
    category: "Regulation",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/nigerian-solar-engineer-working-41a61f78-1779799226119.webp",
  },
  {
    title: "Best Battery Brands for Nigerian Heat",
    excerpt: "Why choosing the right cooling and storage solution is critical for solar longevity in our tropical climate.",
    date: "June 02, 2024",
    author: "Tunde Bakare",
    category: "Technology",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-panel-detail-7ddd6998-1779797458007.webp",
  },
  {
    title: "Solar ROI in the Current Naira Economy",
    excerpt: "Analyzing how solar pays for itself even faster now given the rising costs of traditional energy sources.",
    date: "June 10, 2024",
    author: "Bisi Akande",
    category: "Finance",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/project-solar-farm-d1f2527c-1779797459914.webp",
  },
];

export function Blog() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Solar Insights</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-primary">Latest from Our Blog</h2>
            <p className="text-muted-foreground text-lg">
              Expert advice tailored for the Nigerian energy landscape.
            </p>
          </div>
          <Button variant="outline" className="mt-8 md:mt-0" asChild>
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4 text-xs font-bold uppercase text-primary">
                  <span className="bg-primary/10 px-2 py-1 rounded">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  <Link to={`/blog/${index}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User className="h-3 w-3 mr-1" /> {post.author}</span>
                  </div>
                  <Link to={`/blog/${index}`} className="text-primary font-bold text-sm flex items-center group/link">
                    Read <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}