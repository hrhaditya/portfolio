import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Calendar } from "lucide-react";
import blogs from "../data/blogs.json";

const Blogs = () => {
  const [tag, setTag] = useState("All");
  const [visibleBlogs, setVisibleBlogs] = useState(blogs);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (tag === "All") {
      setVisibleBlogs(blogs);
    } else {
      setVisibleBlogs(blogs.filter((blog) => blog.tags.includes(tag)));
    }
  }, [tag]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [visibleBlogs]);

  const allTags = [
    "All",
    ...Array.from(new Set(blogs.flatMap((blog) => blog.tags))),
  ];

  return (
    <section id="blogs" className="py-20 bg-primary/10" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title animate-on-scroll">My Blogs</h2>

        <div className="flex flex-wrap gap-2 mb-8 animate-on-scroll">
          {allTags.map((t) => (
            <Button
              key={t}
              variant={tag === t ? "default" : "outline"}
              size="sm"
              onClick={() => setTag(t)}
              className="mb-2"
            >
              {t}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBlogs.map((blog, index) => (
            <Card
              key={blog.id}
              className="animate-on-scroll overflow-hidden flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                <div className="flex items-center text-muted-foreground mt-1">
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm">{blog.date}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {blog.tags.slice(0, 2).map((t) => (
                    <Badge key={t} variant="secondary" className="mr-1 mb-1">
                      {t}
                    </Badge>
                  ))}
                  {blog.tags.length > 2 && (
                    <Badge variant="outline" className="mb-1">
                      +{blog.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {blog.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full" asChild>
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    Read on Medium
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
