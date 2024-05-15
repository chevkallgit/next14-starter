import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>This is not a page.</p>
            <Link href="/">Return Home</Link>
        </div>
    )
  };
  
  export default NotFound;