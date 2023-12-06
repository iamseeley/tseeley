import Text from "../Typography/TypographyText"
import Link from "next/link"
import LastUpdated from "./LastUpdated"

export default function Header() {
    return (
        <header className="mb-4">
            <div>
                <Link href={'/'}><Text weight={'bold'} size={3}>tseeley.com</Text></Link>
                <LastUpdated />
            </div>
        </header>
    )
}