import Text from "../Typography/TypographyText"
import Link from "next/link"
import LastUpdated from "./LastUpdated"

export default function Header() {
    return (
        <header className="mb-4">
            <div>
                <div  className="flex flex-row gap-2">
                    <Link className="my-auto " href={'/'}><div className="w-2 h-2 bg-brand rounded-full"></div></Link>
                    <Link href={'/'}><Text weight={'bold'} size={3}>tseeley.com</Text></Link>
                </div>
                
                <LastUpdated />
            </div>
        </header>
    )
}