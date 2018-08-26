import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { NotFound404 } from './components/NotFound404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="list-training-days" component={App}>
			<Route path=":filter" component={App} />
		</Route>
		<Route path="add-training-day" component={App} />
		<Route path="*" component={NotFound404}/>
	</Router>,
	document.getElementById('react-container')
)
