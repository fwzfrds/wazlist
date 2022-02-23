export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    const paths = data.map(w => {
        return {
            params: { id: w.id.toString() } // the id should be a string, so use toString() method
        }
    })

    return {
        // paths: [{}, {}, {paramas: {id: }}]
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();

    return {
        props: { w: data }
    }
}

const Details = ({ w }) => {
    return (
        <div>
            <h1>{w.name}</h1>
            <p>{w.email}</p>
            <p>{w.website}</p>
            <p>{w.address.city}</p>
        </div>
    );
}

export default Details;