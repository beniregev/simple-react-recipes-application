import React from 'react';

export class RecipesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { activeUser } = this.props;

        return(
            <div>
                Recipes Page Component
            </div>
        );
    }
}

// export default RecipesPage;