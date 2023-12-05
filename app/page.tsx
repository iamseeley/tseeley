import Image from 'next/image'
import Button from './components/Button/Button'
import { H1, H2, H3, H4 } from './components/Typography/TypographyHeading'
import Text from './components/Typography/TypographyText'

export default function Home() {
  return (
    <section className="">
      <H1>This is a H1</H1>
      <H2>This is a H2</H2>
      <H3>This is a H3</H3>
      <H4>This is a H4</H4>
      <div className='p-4 bg-foreground '>
      <h1 className=''>Yo</h1>

      <Button>Button</Button>
      </div>
      {/* <STRONG>BIG</STRONG> */}
      {/* <Text size={2} color="primary" weight="normal" spaced>Bold Primary Text</Text> */}
      <Text size={4} color='primary' weight='normal' spaced>Here is more text</Text>
      <Text size={2} spaced color='primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minima officiis minus eveniet facere aliquam consequuntur accusantium nemo voluptatum! Vero, repellat. Ab, expedita quae ad hic consectetur dignissimos autem maxime.</Text>
    </section>
  )
}
