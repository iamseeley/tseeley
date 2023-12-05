import Text from "../Typography/TypographyText"
import Link from "next/link"

export default function Header() {
    return (
        <header className="mb-4">
            <div>
                <Link href={'/'}><Text weight={'bold'} size={3}>tseeley.com</Text></Link>
                <Text weight={'bold'} color={'tertiary'} size={4} >Last updated Nov. 9th 10:40</Text>
            </div>
        </header>
    )
}