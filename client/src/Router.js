import { useNavigate } from "react-router";

export default function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} />
}
