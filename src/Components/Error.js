import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    // console.log(err);
    return (
        <div className="ErrorPage">
            <h1>{err.status} : {err.statusText}</h1>
            <h2>Something Went Wrong</h2>
            <h2>{err.data}</h2>
            <h3>Please check the URL</h3>
        </div>
    );
}
export default Error;