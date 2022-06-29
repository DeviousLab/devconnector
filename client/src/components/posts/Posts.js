import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPosts } from '../../actions/post'
import Spinner from '../layouts/Spinner'

const Posts = ({ getPosts, post: { posts, loading }}) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <div>Posts</div>
  )
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)