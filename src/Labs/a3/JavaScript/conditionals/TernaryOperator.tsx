function TernaryOperator() {
    let loggedIn = true;
    let loggedIn2 = false;
    return (
        <div>
            <h2>Logged In</h2>
            {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
            {loggedIn2 ? <p>Welcome</p> : <p>Please login</p>}
        </div>
    )
}
export default TernaryOperator