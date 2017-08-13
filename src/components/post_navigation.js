import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class PostNavigation extends Component {
    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary btn-sm' to={this.props.link}>
                      Add a link
                    </Link>
                </div>
            </div>
        );
    }
}


export default PostNavigation
