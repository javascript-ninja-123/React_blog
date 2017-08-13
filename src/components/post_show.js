import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getPost, deletePost} from '../actions/index';
import {bindActionCreators} from 'redux'

class PostShow extends Component {
  componentDidMount() {
      const {id} = this.props.match.params;
      this.props.getPost(id);
  }
  getIt(){
    console.log(this.props.posts)
  }
  onDeleteClick(){
    const {id} = this.props.match.params;
    const deleteIt = this.props.deletePost(id);
    let newPromise = new Promise(resolve=> {
      resolve(deleteIt)
    })
    .then(() => {
        this.props.history.push('/');
    })
  }
    render() {
        const {posts} = this.props;
      if(!posts){
          return <div>Loadding....</div>
      }
        return (
            <div>
              <Link to='/'>
                  Back to Index
              </Link>
              <button
                className='btn btn-sm btn-danger'
                onClick={this.onDeleteClick.bind(this)}
                >
                Delete
              </button>
              <h3>{posts.title}</h3>
              <h6>Categories {posts.categories}</h6>
              <p>Content {posts.content}</p>
            </div>
        );
    }
}

function mapStateToProps({posts},ownProps) {
return {
  posts:posts[ownProps.match.params.id]
}
}


export default connect(mapStateToProps,{getPost,deletePost})(PostShow);
