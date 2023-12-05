import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';


const TextStyles = cva( 'font-medium',
    {
      variants: {
        size: {
          1: 'text-xl',
          2: 'text-lg', 
          3: 'text-md',
          4: 'text-sm',
        },
        color: {
          primary: 'text-type-primary', // Ensure these classes exist in your Tailwind configuration
          secondary: 'text-type-secondary',
        },
        spaced: {
          true: 'tracking-wide leading-loose',
        },
        weight: {
          normal: 'font-normal',
          bold: 'font-bold',
        },
      },
    }
  );


export interface TextProps extends
		VariantProps<typeof TextStyles> {
			children: string,
		}

export default function Text({ children, size, color, spaced, weight, ...props }: TextProps) {
	return (
		<p className={TextStyles({ size, color, spaced, weight })} {...props} >{children}</p>
	);
}

