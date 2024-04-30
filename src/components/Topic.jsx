import { Link } from "react-router-dom"

function Topic() {
    return (
        <header class="bg-neutral py-2 text-neutral-content">
            <div class="align-element mx-auto px-5 max-w-[1200px] flex justify-center sm:justify-end">
                <div class="flex gap-x-6 justify-center items-center">
                    <Link class="link link-hover text-xs sm:text-sm" to="/login">Sign in / Guest</Link>
                    <Link class="link link-hover text-xs sm:text-sm" to="/register">Create Account</Link>
                </div>
            </div>
        </header>
    )
}

export default Topic