import LinkHeader from "../components/LinkPage"
import "./error.sass"

export default function Error(){
    return (
        <section className="error-section">
            <h1>404</h1>
            <h2>Page not found...</h2>
            <LinkHeader newClass={'font-size'} name={'home'}/>
        </section>
    )
}