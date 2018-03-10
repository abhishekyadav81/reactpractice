import React from "react";

export default function Hoc(HocComponent) {
    return class extends component {
        render() {
            return(
                <HocComponent></HocComponent>
            )
        }
    }
}