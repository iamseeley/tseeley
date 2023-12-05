import Image from 'next/image'
import Button from './components/Button/Button'
import { H1, H2, H3, H4 } from './components/Typography/TypographyHeading'
import Text from './components/Typography/TypographyText'
import Table from './components/Table/Table'
import { TableHead, TableBody, TableRow, TableCell } from './components/Table/Table'

export default function Home() {
  return (
    <section className="">
      
      <H2>Thomas Seeley</H2>
      <div className=''>
      <Text size={2} spaced color='primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minima officiis minus eveniet facere aliquam consequuntur accusantium nemo voluptatum! Vero, repellat. Ab, expedita quae ad hic consectetur dignissimos autem maxime.</Text>
      </div>
      <div className='my-4 p-4 bg-foreground rounded-md border border-neutral-400'>
      <Table>
        
      </Table>

      <h1 className=''>Yo</h1>

      <Button>Button</Button>
      </div>
      
      
    </section>
  )
}
