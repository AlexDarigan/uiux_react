export default function Body({content}) {
    return (
      <body style={{
            display: "flex", 
            flexDirection: "column", 
            backgroundColor: 'wheat', 
            flex: 1
        }}>
        {content}
      </body>
      
    )
  }