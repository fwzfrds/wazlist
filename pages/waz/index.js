import Link from "next/link";
import styles from "../../styles/Waz.module.css";

export const getStaticProps = async () => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    return {
        props: { waz: data }
    }

}

const Waz = ({ waz }) => {
    return (
        <div>
            <h1>All Waz Fans</h1>
            {waz.map(w => (
                <Link href={`/waz/${w.id}`} key={w.id}>
                    <a className={styles.single}>
                        <h3>{w.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Waz;