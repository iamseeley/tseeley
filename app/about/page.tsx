import { H3 } from "../components/Typography/TypographyHeading"
import Text from "../components/Typography/TypographyText"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About',
}

export default function About() {
    return (
        <section className="">
             <div><H3>Now</H3></div>
            <div className='mb-4'>
                <Text size={2} spaced color='primary'>Hi there, my name is Thomas and I make things for the web. I mostly find myself designing/developing websites, and experimenting with web technologies.</Text>
            </div>
            <div className='mb-4'>
                <Text size={2} spaced color='primary'>I use frameworks and libraries like React, Next.js and Tailwind CSS to create interactive, responsive web apps.</Text>
            </div>
            <div className='mb-4'>
                <Text size={2} spaced color='primary'>Nowadays, I&apos;m primarily coding in TypeScript, but I enjoy switching it up and building things with Go and Python.</Text>
            </div>
            <div className='mb-4'>
                <Text size={2} spaced color='primary'>I am currently looking for full-time roles as a front-end or full-stack developer. Please reach out via email <Link className="underline hover:decoration-brand" target="_blank" rel="noopener noreferrer" href="mailto:hell@tseeley.com">hello@tseeley.com</Link> if you would like to talk!</Text>
            </div>
            <div><H3>Future</H3></div>
            <div className='mb-4'>
                <Text size={2} spaced color='primary'>In January 2024, I will be starting a part-time Master of Science in Computer Science program to further improve my programming skills and go deeper on some computer science topics I&apos;m interested in. </Text>
            </div>
            
            <div><H3>Story Time</H3></div>
            <div className='mb-4'>
                <Text size={2} spaced color='primary'>During my junior year of college, as a Business Management/Entrepreneurship major, I became very interested in software and web development. Many of the new venture ideas we came up with in class were software services.</Text>
            </div>
            <div className='mb-4'>
                <Text size={2} spaced color='primary'>None of us knew how to code, so we didn&apos;t have a way to test our ideas. I was tired of creating business model after business model, I wanted to build actual products. I started to self-teach myself web development with the goal of building some of our ideas.</Text>
            </div>
            <div className='mb-4'>
                <Text size={2} spaced color='primary'>My junior year summer I developed the front end for an online therapy platform that me and a few peers created. It was a part of an Entrepreneurship program in Europe and at the end we pitched our product to investors!</Text>
            </div>
            <div className='mb-4'>
                <Text size={2} spaced color='primary'>I fell deep down the web development rabbit hole and that is where I&apos;ve been living ever since.</Text>
            </div>
            <div className='mb-4'>
                <Text size={2} spaced color='primary'>Since that summer I have completed multiple online software and web development courses. I also started providing web development services to small businesses.</Text>
            </div>
            

        </section>
    )
}