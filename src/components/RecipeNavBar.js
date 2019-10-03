import { Jumbotron, Button, Container } from 'react-bootstrap';
import { Nav } from '';

class RecipeNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    logout() {
        this.props.handleLogout();
        this.setState({ redirectToHome: true });
    }

    render() {
        const { activeUser } = this.props;
        const { redirectToHome } = this.state;

        if (redirectToHome) {
            return <Redirect to="/" />;
        }

        const signupLink = !activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null; 
        const loginLink = !activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null; 
        const LogoutLink = activeUser ? <Nav.Link onClick={this.logout}>Logout</Nav.Link> : null; 

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#/">Recipe Book</Navbar.Brand>
                <Navbar.Toggle aria-control="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/recipes">Recipes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}