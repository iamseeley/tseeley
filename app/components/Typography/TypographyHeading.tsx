import { cva, VariantProps } from 'class-variance-authority';

const HeadingStyles = cva(
  'font-medium', // common styles for all headings
  {
    variants: {
      size: {
        1: 'text-4xl font-bold', // h1 style
        2: 'text-3xl font-semibold', // h2 style
        3: 'text-2xl font-semibold', // h3 style
        4: 'text-xl font-medium', // h4 style
      },
      // ... other variants like 'centered' ...
    },
    
  }
);

export type ShortHandHeadingProps = Omit<HeadingProps, 'size' | 'as'>;

export const H1 = (props: ShortHandHeadingProps) => <Heading as="h1" size={1} {...props} />;
export const H2 = (props: ShortHandHeadingProps) => <Heading as="h2" size={2} {...props} />;
export const H3 = (props: ShortHandHeadingProps) => <Heading as="h3" size={3} {...props} />;
export const H4 = (props: ShortHandHeadingProps) => <Heading as="h4" size={4} {...props} />;


export interface HeadingProps extends VariantProps<typeof HeadingStyles> {
  as: 'h1' | 'h2' | 'h3' | 'h4';
  children: string;
  size: 1 | 2 | 3 | 4;
}

export default function Heading({ as: Heading, children, ...props }: HeadingProps) {
  return <Heading className={HeadingStyles(props)} {...props}>{children}</Heading>;
}
