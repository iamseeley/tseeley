import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

 const ButtonStyles = cva(
	'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
	{
		variants: {
			intent: {
				primary: 'bg-brand text-white',
				secondary:
					'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500',
				
			},
			fullWidth: {
				true: 'w-full',
			},
			centered: {
				true: 'm-auto'
			}
		},
		defaultVariants: {
			intent: 'primary',
		},
	},
);

export interface ButtonProps extends
		VariantProps<typeof ButtonStyles> {
			children: string,
            href?: string,
		}

export default function Button({ intent, children, href, fullWidth, centered, ...props }: ButtonProps) {
	return href ? (
        <Link href={href} className={ButtonStyles({ intent, fullWidth, centered })}>{children}</Link>
    ) : (
		<button className={ButtonStyles({ intent, fullWidth, centered })} {...props} >{children}</button>
	);
}