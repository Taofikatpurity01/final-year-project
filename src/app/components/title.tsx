import Head from 'next/head'

interface TitleProps {
  title?: string
  description?: string
  faviconPath?: string
  appleTouchIcon?: string
  manifestPath?: string
}

const Title: React.FC<TitleProps> = ({
  title = 'Smart Waste',
  description = 'Smart Waste Management System',
  faviconPath = '/favicon.ico',
  appleTouchIcon = '/apple-touch-icon.png',
  manifestPath = '/site.webmanifest'
}) => {
  return (
    <Head>
      {/* Page Title */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href={faviconPath} />
      <link rel="shortcut icon" type="image/x-icon" href={faviconPath} />
      
      {/* Multiple favicon sizes */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      
      {/* Apple Touch Icon */}
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      
      {/* Web App Manifest */}
      <link rel="manifest" href={manifestPath} />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#ffffff" />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/smart-waste-og.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/smart-waste-twitter.png" />
    </Head>
  )
}

export default Title