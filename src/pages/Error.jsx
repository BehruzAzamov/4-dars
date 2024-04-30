import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError()

    if (error.status == "404") {
        return (
            <main className="min-h-screen grid place-content-center text-neutral">
                <div className="text-center">
                    <h2 className="text-primary text-4xl lg:text-8xl mb-3">404</h2>
                    <p className="font-bold mb-5 text-3xl lg:text-6xl">Page Not Found</p>
                </div>
            </main>
        )
    }
    return (
        <main className="min-h-screen grid place-content-center text-neutral">
            <div className="text-center">
                <h2 className="text-primary text-4xl lg:text-8xl mb-3">Upps...!</h2>
                <p className="font-bold mb-5 text-3xl lg:text-6xl">Something went wrong</p>
            </div>
        </main>)
}

export default Error