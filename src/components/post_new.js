import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {createPost} from '../actions/index'
import {bindActionCreators} from 'redux';

class PostNew extends Component {
  renderField(field){
    const {meta: {touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-help'>
        {touched ? error : ''}
      </div>
      </div>
    )
  }
  onSubmit(values){
    const pushData = this.props.createPost(values);
    const newPromise = Promise.all([
      pushData
    ])
    newPromise
    .then(()=> {
        this.props.history.push('/');
    })
  }
    render() {
        return (
            <div>
              <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  label='title'
                  name='title'
                  component={this.renderField}
                />
                <Field
                  label='categories'
                  name='categories'
                  component={this.renderField}
                />
                <Field
                  label='Post Content'
                  name='content'
                  component={this.renderField}
                />
                <button
                  className='btn btn-primary'
                  type='submit'
                  >Submit</button>
                  <Link className='btn btn-primary' to='/'>
                    Cancel
                  </Link>
              </form>
            </div>
        );
    }
}

function validate(values){
const errors = {};
if(!values.title || values.title.length < 3){
  errors.title ='Enter a title'
}
if(!values.categories){
  errors.categories = 'Enter some categories'
}
if(!values.content){
  errors.content = 'Enter some content'
}

//if errors is empty, the form is fine to submit
return errors;
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({createPost},dispatch)
}
export default  reduxForm({
  validate,
  form:'PostsnewForm'
})(
  connect(null,mapDispatchToProps)(PostNew)
)
