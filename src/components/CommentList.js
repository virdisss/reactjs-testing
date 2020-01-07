import React from 'react';
import {connect} from 'react-redux';

class CommentList extends React.Component {

    render() {
        return (
            <ul>
                {
                    this.props.comments.map(comment => <li key={comment}>{comment}</li>)
                }
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    comments: state.comments
});

export default connect(mapStateToProps)(CommentList);