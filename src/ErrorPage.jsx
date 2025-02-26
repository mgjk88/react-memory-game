import propTypes from "prop-types"

function ErrorPage({error}){
    return <>
        <h1>Opps, something went wrong</h1>
        <p>{error.name} occured</p>
    </>
}

ErrorPage.propTypes = {
    error: propTypes.object
}

export default ErrorPage;