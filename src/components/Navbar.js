import CartWidget from './CartWidget.js'

const Navbar = () => {
    return (
        <>
            <h1>
                <span>D</span>&<span>D</span> Fifth Edition
            </h1>
                <nav>
                    <ul>
                        <li>Featured</li>
                        <li>Bundles</li>
                        <li>Sourcebooks</li>
                        <li>Digital Dice</li>
                    </ul>
                    < CartWidget ></CartWidget>
                </nav>
        </>
    )
}

export default Navbar;