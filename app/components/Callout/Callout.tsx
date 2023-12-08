import { cva, VariantProps } from 'class-variance-authority';


 const CalloutStyles = cva(
	'',
	{
		variants: {
			intent: {
				primary: 'bg-white border shadow-sm text-white',
				secondary:
					'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500',
				danger: 'bg-red-500 text-white focus:ring-red-500',
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

export interface CalloutProps extends
		VariantProps<typeof CalloutStyles> {
			children: string,
		}

export default function Callout({ intent, children, fullWidth, centered, ...props }: CalloutProps) {
	return (
        
		    <div className={CalloutStyles({ intent, fullWidth, centered })} {...props} >{children}</div>
        
	);
}