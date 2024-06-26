import Link from "next/link";
import styles from "./links.modual.css"

const Links = () => {

    const links = [
        {
            title: "HomePage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },        
    ];

    return (
        <div className={styles.links}>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    ) 
  };
  
  export default Links;