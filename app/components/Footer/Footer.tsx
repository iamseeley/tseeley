import Link from "next/link"
import Text from "../Typography/TypographyText"

export default function Footer() {
    return(
        <footer className="opacity-30 flex flex-row gap-4 mt-20 mb-2">
            {/* <Link className="opacity-30" href={'https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1'}><img width={24} height={24} src="/assets/images/cc.svg" alt="" /></Link> */}
            <Text weight={'normal'} size={4}><Link href={'/about'}>Thomas Seeley</Link> © 2023 — <Link href={'https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1'}>BY-NC-SA 4.0</Link></Text>
            
        </footer>
    )
};

