export default function Post({post}) {
    const {title,body} = post
  return (
    <div style={{ 
        background: "white",
        color: "black",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "15px"
        
        }} >
      <h4>{title} </h4>
      <h6> {body} </h6>
      
    </div>
  );
}