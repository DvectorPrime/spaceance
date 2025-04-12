function NavLink({name, link, active}){
    return (
        <li><a className={`nav-link ${active && "active"}`} href={link}>{name}</a></li>
    )
}

export default NavLink