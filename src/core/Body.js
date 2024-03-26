export default function Body({content}) {
    return (
      <body style={{
            display: "flex", 
            flexDirection: "column", 
            backgroundColor: '#FFDB99', 
            flex: 1
        }}>
        {content}
      </body>
      
    )
  }