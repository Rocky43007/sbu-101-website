import Head from 'next/head';


export default function Header({ title, description }: { title: string, description: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="ogtitle" />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta name="twitter:card" content={description} key="twcard" />
    </Head>
  )
}