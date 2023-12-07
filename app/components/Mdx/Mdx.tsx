import { MDXRemote } from "next-mdx-remote/rsc"
import Button from "../Button/Button"
import Card from "../Card/Card"
import Table from "../Table/Table"
import Text from "../Typography/TypographyText"
import Heading from "../Typography/TypographyHeading"
import { H1, H2, H3, H4 } from "../Typography/TypographyHeading"


const components = { Button, Card, Table, Text, Heading, H1, H2, H3, H4 }

export function Mdx(props) {
    return (
        <MDXRemote {...props} components={{ ...components, ...(props.components || {})}} />
    )
}