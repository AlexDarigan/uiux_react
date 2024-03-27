export default function IconButton(props) {
    return (
        <button
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                padding: 'auto',
                width: '42px',
                height: '42px',
                backgroundColor: "#FFA500",
                borderRadius: '8px',
                boxShadow: '2px 2px 2px'
            }}
        >
            {props.children}
        </button>
    )
};