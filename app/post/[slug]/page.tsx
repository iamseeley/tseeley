import { getPosts } from "@/app/db/posts"
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { H2 } from "@/app/components/Typography/TypographyHeading";
import { Mdx } from "@/app/components/Mdx/Mdx";
import Text from "@/app/components/Typography/TypographyText";

function formatDate(dateString: string): string {
  // Split the date string into parts
  const [year, month, day] = dateString.split('-').map(part => parseInt(part, 10));

  // Create a new date object using local time
  const date = new Date(year, month - 1, day);

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}



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

  const formattedDate = formatDate(post.metadata.date);

    return (
        <section>
          <div className="mb-6">
            <H2>{post.metadata.title}</H2>
            <Text color="tertiary" size={3}>{formattedDate}</Text>
          </div>
            <article className="prose prose-headings:mt-4 text-type-primary">
                <Mdx source={post.content} />
            </article>
        </section>
    )
}