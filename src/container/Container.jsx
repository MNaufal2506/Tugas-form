export default function Container({children}) {
    return (
        <div className="container">
            <h1>Pondok tahfizh plus abudzar</h1>
            {children}
            <footer>
                <p>© 2023 Pondok Tahfizh Plus Abudzar. All rights reserved.</p>
            </footer>
        </div>
    )
}