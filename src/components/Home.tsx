import Link from "next/link"

export default function HomePage(){

    return(
        <main>
            <div>
                <h1>Hi...</h1>
                <h3>Development</h3>
                <Link href='/contact'>Find my resume</Link>
            </div>
        </main>
    )
}