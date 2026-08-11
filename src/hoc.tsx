import type { ComponentType } from "react"

function withBorder(WrappedComponent: ComponentType) {
    return function WithBorder(props : {}) {
        return (
            <div style={{ border: "2px solid blue", padding: "10px" }}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default withBorder