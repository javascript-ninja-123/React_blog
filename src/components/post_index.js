import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index'
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import PostNavigation from './post_navigation'

class PostIndex extends Component {
  componentDidMount() {
    setTimeout(()=> {
      this.props.fetchPost();
    },500)
  }
  renderPost(value){
      return (
        <li key={value.id} className='list-group-item'>
          <Link to={`/posts/${value.id}`}>
          <h2>{value.title}</h2>
          </Link>
        </li>
      )
  }
    render() {
        return (
            <div>
                <PostNavigation link='/posts/new'/>
                <h3 className='text-center'>Posts</h3>
                <ul className='list-group'>
                  {Object.values(this.props.posts).map(this.renderPost)}
                </ul>
            </div>
        );
    }
}
function mapStateToProps({posts}) {
  return{posts}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPost},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(PostIndex);
