  
export default function Circle(props) {
    return (
      <div style={{
        height: props.size, 
        width: props.size,
        borderWidth: props.size,
        borderColor: props.color,
        borderStyle: props.style, 
        backgroundColor: props.color,
        borderRadius: props.radius,
        }}>
          {props.children}
      </div>
    )
};
  
  Circle.defaultProps = {
    size: '12px',
    color: 'orange',
    style: 'solid',
    radius: '24px',
  }