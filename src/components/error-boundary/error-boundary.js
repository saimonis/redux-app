import React, {Component} from "react";
import ErrorIndicator from "../ui/error-indicator";

class ErrorBoundary extends Component{
    state = {
        error:false
    }
    componentDidCatch(error, errorInfo) {
    }

    render(){
        if(this.state.error) return <ErrorIndicator/>;

        return this.props.children
    }
}

export default ErrorBoundary