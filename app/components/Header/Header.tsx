import Text from "../Typography/TypographyText"


export default function Header() {
    return (
        <header className="mb-4">
            <div>
                <Text weight={'bold'} size={3}>tseeley.com</Text>
                <Text weight={'bold'} color={'tertiary'} size={4} >Last updated Nov. 9th 10:40</Text>
            </div>
        </header>
    )
}