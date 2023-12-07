import { getPosts } from "@/app/db/posts"
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { H2 } from "@/app/components/Typography/TypographyHeading";
import { Mdx } from "@/app/components/Mdx/Mdx";

// export async function generateMetadata({
//     params,
//   }): Promise<Metadata | undefined> {
//     let post = getBlogPosts().find((post) => post.slug === params.slug);
//     if (!post) {
//       return;
//     }
  
//     let {
//       title,
//       publishedAt: publishedTime,
//       summary: description,
//       image,
//     } = post.metadata;
//     let ogImage = image
//       ? `https://leerob.io${image}`
//       : `https://leerob.io/og?title=${title}`;
  
//     return {
//       title,
//       description,
//       openGraph: {
//         title,
//         description,
//         type: 'article',
//         publishedTime,
//         url: `https://leerob.io/blog/${post.slug}`,
//         images: [
//           {
//             url: ogImage,
//           },
//         ],
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title,
//         description,
//         images: [ogImage],
//       },
//     };
//   }



export default function Post({ params }) {
    let post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
    return (
        <section>
            <H2>{post.metadata.title}</H2>
            <article className="leading-loose tracking-wide text-type-primary">
                <Mdx source={post.content} />
            </article>
        </section>
    )
}