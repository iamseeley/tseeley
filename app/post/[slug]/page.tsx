import { getPosts } from "@/app/db/posts"
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { H2 } from "@/app/components/Typography/TypographyHeading";
import { Mdx } from "@/app/components/Mdx/Mdx";

export async function generateMetadata({
    params,
  }): Promise<Metadata | undefined> {
    let post = getPosts().find((post) => post.slug === params.slug);
    if (!post) {
      return;
    }
  
    let {
      title,
      date: date,
      description: description,
    } = post.metadata;
    
  
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        url: `https://tseeley.com/post/${post.slug}`,
  
      },
      // twitter: {
      //   card: 'summary_large_image',
      //   title,
      //   description,
        
      // },
    };
  }



export default function Post({ params }) {
    let post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
    return (
        <section>
            <H2>{post.metadata.title}</H2>
            <article className="prose prose-headings:mt-4 text-type-primary">
                <Mdx source={post.content} />
            </article>
        </section>
    )
}