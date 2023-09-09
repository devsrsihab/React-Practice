export default function User({user}) {
  // user styles
  const userStyles = {
    border: "1px solid tomato",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-evenly",
    padding: "20px",
    background:"black",
    borderRadius: "5px",
    margin: "20px",
}
  return (
    <div style={userStyles}>
      <span> {user.name} </span>
      <span> {user.email} </span>
      <span> {user.phone} </span>
    </div>
  );
}