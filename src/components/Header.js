import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

Header.defaultProps = {
  title: 'Task Manager'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;