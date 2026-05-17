import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-data";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { User, Calendar } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pb-0">
      <section className="bg-[var(--color-bg)] pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-semibold mb-6 uppercase tracking-widest border border-[var(--color-primary)]/20">
            {post.category.replace("-", " ")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-8 max-w-3xl mx-auto leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-[var(--color-text-muted)] font-medium">
            <span className="flex items-center gap-2"><User size={18} /> {post.author}</span>
            <span className="flex items-center gap-2"><Calendar size={18} /> {post.publishedAt}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 md:px-8 -mt-10 relative z-10">
        <div className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-lg border-8 border-white bg-gray-100">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        </div>
      </div>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8 prose prose-lg prose-headings:text-[var(--color-text-primary)] prose-p:text-[var(--color-text-muted)]">
          <p className="lead text-xl font-medium text-[var(--color-text-primary)] mb-8">{post.excerpt}</p>
          <p>
            Welcome to the Indore Dental Hospital blog. This is a placeholder for the actual article content. 
            When integrating with a CMS (like Sanity, Contentful, or WordPress), this section will dynamically render rich text, images, and embedded videos.
          </p>
          <h2>Why This Matters</h2>
          <p>
            Dental health is a critical component of overall well-being. By understanding the treatments available, you can make informed decisions about your oral care. Our specialists at Indore Dental Hospital are committed to providing you with the highest quality of care in a comfortable, pain-free environment.
          </p>
          <blockquote>
            &quot;A beautiful smile is a powerful tool for confidence. Our goal is to architect that smile for you with precision and care.&quot; – Dr. Sugandh
          </blockquote>
        </div>
      </section>

      <AppointmentCTA />
    </div>
  );
}
