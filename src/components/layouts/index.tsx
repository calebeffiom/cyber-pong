import { ReactNode } from "react"
import { Navbar } from "@shared"
import Head from "next/head"

interface PropTypes{
    showNav: boolean
    children: ReactNode
}
const LandingLayout =({showNav, children}:PropTypes)=>{
    const title = "Cyber Pong"
    const description = ""
    return(
        <><Head>
            <title>{title}</title>

            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="author" content={title} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
            <meta name="description" content={description} />
            <meta name="title" content={description} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={title} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="en_US" />
            <meta property="og:url" content="" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="" />

            <link rel="icon" type="image/x-icon" href="" />
        </Head><main className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* <div className="container mx-auto"> */}
                {showNav && <Navbar />}
                {children}
                {/* </div> */}
            </main></>  
    )
}
export default LandingLayout