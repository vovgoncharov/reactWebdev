const Profile =()=>{
return(

<section className="content">
    <nav className="menu">
        <ul className="nav-menu">
            <li className="item-menu">
                <a href="#" className="link">
                    Contact
                </a>
            </li>
            <li className="item-menu">
                <a href="#" className="link">
                    Message
                </a>
            </li>
            <li className="item-menu">
                <a href="#" className="link">
                    Information
                </a>
            </li>
            <li className="item-menu">
                <a href="#" className="link">
                    Portfolio
                </a>
            </li>
        </ul>
    </nav>
    <article className="info">
        <img
            src="https://cdn.abcotvs.com/dip/images/6213148_052620-cc-ap-spacex-dragon-img.jpg?w=1600"
            alt="Nasa"
            className="picture"
        />
        <div className="info-foto">
            <img
                src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
                alt="Pussy"
                className="photo"
            />
            <h2 className="name">Ilon Mask</h2>
        </div>
    </article>
</section>
)
}
export default Profile;