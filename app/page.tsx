import Image from 'next/image'
import Button from './components/Button/Button'
import { H1, H2, H3, H4 } from './components/Typography/TypographyHeading'
import Text from './components/Typography/TypographyText'
// import Table from './components/Table/Table'
import { TableHead, TableBody, TableRow, TableCell } from './components/Table/Table'
import Link from 'next/link'
import MainComponent from './components/TestTable/TestTable'
import Card from './components/Card/Card'
import Callout from './components/Callout/Callout'

export default function Home() {
  return (
    <section>
      <section  className="my-6 ">
      <H2>Thomas Seeley</H2>
      <div className=''>
      <Text size={2} spaced color='primary'>Currently exploring the world of software/web development, making little projects, and writing about programming and design.</Text>
      <Card><Text size={2} spaced weight='normal' color='primary'>🎉 I am starting a part-time MSCS Program in January!</Text></Card>
      </div>
      {/* <Callout>Looking for work</Callout> */}
      </section>
      <section className='my-6 pb-2 '>
        <Text size={2}>Works</Text>
        <MainComponent />
      </section>
      <section className='my-6  pb-2'>
      <Text size={2}>Links</Text>
      <div className='flex flex-row flex-wrap gap-2 mt-2'>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'/about'} rel="noopener noreferrer">about</Link>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'/cv'} target="_blank" rel="noopener noreferrer">cv</Link>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'mailto:hello@tseeley.com'} target="_blank" rel="noopener noreferrer">email</Link>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'https://github.com/iamseeley'} target="_blank" rel="noopener noreferrer">github</Link>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'https://twitter.com/iamseeley'} target="_blank" rel="noopener noreferrer">twitter/x</Link>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'https://www.linkedin.com/in/thomas-seeley-3229b5205/'} target="_blank" rel="noopener noreferrer">linkedin</Link>
      </div>

      </section>
    </section>
  )
}
