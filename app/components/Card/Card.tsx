import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

 const CardStyles = cva(
	'flex justify-center   px-4 py-4 mt-4 rounded-lg',
	{
		variants: {
			intent: {
				primary: 'bg-foreground border-neutral-400 border  ',
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

export interface CardProps extends
		VariantProps<typeof CardStyles> {
			children: ReactNode,
		}

export default function Card({ intent, children, fullWidth, centered, ...props }: CardProps) {
	return (
		<div className={CardStyles({ intent, fullWidth, centered })} {...props} >{children}</div>
	);
}