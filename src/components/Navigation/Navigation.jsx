import Link from "next/link";

const links =[
    {
        label: 'Landing',
        route: '/',
    },
    {
        label: 'Home',
        route: '/home',
    },
    {
        label: 'About',
        route: '/about',
    },
]

function Navigation() {
  return (
    <nav>
        <ul>
            {
                links.map(({label,route}) => (
                    <li key={route} >
                        <Link href={route} >{label}</Link>
                    </li>
                ))
            }
        </ul>
    </nav>  
  )
}

export default Navigation