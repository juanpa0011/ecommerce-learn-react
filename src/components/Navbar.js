import CartWidget from './CartWidget.js'

const itemNum = 0;

const Navbar = (params) => {
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
                    < CartWidget itemNum='0' ></CartWidget>
                </nav>
        </>
    )
}

export default Navbar;