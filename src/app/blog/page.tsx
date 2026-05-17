import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="pb-24">
      <section className="bg-[var(--color-bg)] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-6">
              Dental Insights
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Expert advice, treatment guides, and the latest in modern dentistry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-white rounded-[2rem] overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-[var(--shadow-card-hover)] transition-all h-full flex flex-col p-4 pb-8">
                    <div className="h-56 w-full relative overflow-hidden rounded-[1.5rem]">
                      <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col flex-1 pt-6 px-4">
                      <div className="flex items-center gap-3 text-xs text-[var(--color-text-light)] mb-4 uppercase tracking-widest font-semibold">
                        <span className="text-[var(--color-primary)]">{post.category.replace("-", " ")}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 leading-snug">{post.title}</h3>
                      <p className="text-[var(--color-text-muted)] mb-6 flex-1">{post.excerpt}</p>
                      <span className="text-[var(--color-primary)] font-semibold mt-auto inline-flex items-center group-hover:underline underline-offset-4">Read Article <ArrowRight className="ml-2 h-4 w-4" /></span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
