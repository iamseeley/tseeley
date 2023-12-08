import Image from 'next/image'
import Button from './components/Button/Button'
import { H1, H2, H3, H4 } from './components/Typography/TypographyHeading'
import Text from './components/Typography/TypographyText'
// import Table from './components/Table/Table'
import { TableHead, TableBody, TableRow, TableCell } from './components/Table/Table'
import Link from 'next/link'
import MainComponent from './components/TestTable/TestTable'
import Callout from './components/Callout/Callout'

export default function Home() {
  return (
    <section>
      <section  className="my-6 ">
      <H2>Thomas Seeley</H2>
      <div className=''>
      <Text size={2} spaced color='primary'>Currently exploring the world of software/web development, making little projects, and writing about programming and design.</Text>
      <Text size={2} spaced color='primary'>I will be starting a part-time MSCS Program in January!</Text>
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
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'/about'}>about</Link>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'/about'}>cv</Link>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'/about'}>email</Link>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'/about'}>github</Link>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'/about'}>twitter/x</Link>
        <Link className='hover:border-2 border-2 border-transparent hover:border-brand shadow-sm bg-neutral-100 px-2 py-1 rounded-full leading-none' href={'/about'}>linkedin</Link>
      </div>

      </section>
    </section>
  )
}
