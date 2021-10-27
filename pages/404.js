import Link from 'next/link'

function Custom404() {
    return (
        <div>
            <main>
                <h1>404 - That page does not seem to exist...</h1>
                <iframe
                    src="https://giphy.com/embed/l2JehQ2GitHGdVG9y"
                    width="480"
                    height="362"
                    frameBorder="0"
                    allowFullScreen
                >
                </iframe>
                <Link href="/">
                    <button className="btn-blue">Go home</button>
                </Link>
            </main>
        </div>
    )
}

export default Custom404
