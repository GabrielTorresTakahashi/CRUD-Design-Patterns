import Head from 'next/head'

interface ITitleProps {
    title: String
}

export default function Title(props: ITitleProps) {
    const title = props.title + " - Crud JS"
    return (
        <Head>
            <title>
                {title}
            </title>
        </Head>
    )
}