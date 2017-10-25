import React from 'react'
import { Link } from 'react-router'

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1><Link to='/'>ReduxInstagram</Link></h1>
                {React.cloneElement(this.props.children, this.props) /* wtf? */} 
            </div>
        )
    }
})

export default Main

/* This will not re-render after save
const Main = () => (
    <Link to='/'><h1>ReduxInstagram</h1></Link>
)*/
/*
Warning: Accessing createClass via the main React package is deprecated,
and will be removed in React v16.0. Use a plain JavaScript class instead.
If you're not yet ready to migrate, create-react-class v15.* is available
on npm as a temporary, drop-in replacement.
For more info see https://fb.me/react-create-class
*/