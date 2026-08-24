import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  CheckCircle2, 
  Share2, 
  BookOpen,
  Building2,
  Lock,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { siteContent, BlogPost } from "@/lib/content";
import type { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteContent.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = siteContent.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artigo não encontrado | Mundo Telecom",
    };
  }

  return {
    title: `${post.title} | Blog Mundo Telecom`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishDate,
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = siteContent.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts from same or different categories
  const relatedPosts = siteContent.blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="w-full bg-[#FFFEFF]">
      {/* Post Header Hero */}
      <section className="bg-mundo-navy pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 text-mundo-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 font-display">
            <Link href="/" className="hover:text-mundo-orange transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-mundo-orange transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-mundo-orange font-bold truncate max-w-xs">{post.category}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="orange" className="text-xs">
              {post.category}
            </Badge>
            <span className="text-xs text-slate-300 font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-mundo-orange" />
              {post.readTime}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              • {post.publishDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            {post.summary}
          </p>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-mundo-orange flex items-center justify-center font-display font-bold text-white text-xs">
                MT
              </div>
              <div>
                <span className="font-bold text-white block">Equipe Técnica Mundo Telecom</span>
                <span className="text-slate-400">Engenharia de Redes & Telecomunicações</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#07224B" direction="down" height={36} />

      {/* Main Post Body & Table of Contents */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table of Topics Box */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 mb-12 space-y-3">
            <h3 className="text-xs font-display font-bold uppercase tracking-wider text-mundo-orange flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Estrutura de Tópicos do Artigo
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {post.topics.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono font-bold text-mundo-orange">{idx + 1}.</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Typography Content */}
          <div className="prose prose-slate max-w-none space-y-8 text-base text-slate-800 leading-relaxed">
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              {post.content.intro}
            </p>

            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-mundo-navy">
                  {section.heading}
                </h2>

                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.highlightBox && (
                  <div className="p-6 rounded-2xl bg-mundo-orange/10 border-l-4 border-mundo-orange text-sm font-medium text-mundo-navy my-6 leading-relaxed">
                    {section.highlightBox}
                  </div>
                )}

                {section.bulletPoints && (
                  <ul className="space-y-2 pt-2 text-sm text-slate-700">
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-mundo-orange shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Post Closing Contextual CTA */}
          <div className="mt-14 p-8 rounded-3xl bg-mundo-navy text-white shadow-xl space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 max-w-md">
              <h4 className="text-xl font-display font-bold text-white">
                {post.cta.text}
              </h4>
              <p className="text-xs text-slate-300">
                Fale com nossos especialistas e implemente a tecnologia com quem tem mais de 20 anos de mercado.
              </p>
            </div>
            <Button
              href={post.cta.href}
              variant="primary"
              size="md"
              className="shrink-0"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {post.cta.buttonText}
            </Button>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-mundo-navy hover:text-mundo-orange transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para Todos os Artigos</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h3 className="text-2xl font-display font-bold text-mundo-navy">
            Artigos Relacionados
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <div
                key={rPost.slug}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-mundo-orange/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-display font-bold uppercase tracking-wider text-mundo-orange">
                    {rPost.category}
                  </span>
                  <Link href={`/blog/${rPost.slug}`}>
                    <h4 className="text-base font-display font-bold text-mundo-navy hover:text-mundo-orange transition-colors line-clamp-2">
                      {rPost.title}
                    </h4>
                  </Link>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rPost.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">{rPost.readTime}</span>
                  <Link
                    href={`/blog/${rPost.slug}`}
                    className="font-display font-bold text-mundo-orange hover:underline"
                  >
                    Ler Artigo →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
