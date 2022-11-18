import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-primary_green">
            <header className="mb-6">
                <Nav />
            </header>
            <main className="flex w-full h-full flex-1 flex-col p-6">
                {children}
            </main>
            <footer className="flex h-24 w-full items-center justify-center border-t bg-gray-800 text-pale_yellow py-6">
                <span className="text-center px-4">
                    A fruit and vegetables seasonal calendar for the UK
                </span>
            </footer>
        </div>
    )
}
