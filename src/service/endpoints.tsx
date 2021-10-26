let endpoints = {
	//SSO
	LOGIN: '/sso/verifyuser',
	UPDATE_PROFILE: '/sso/userprofile'
}

let API_BOOK = {
	LOGIN_API: {
		url: endpoints.LOGIN,
		method: 'POST',
		data: null
	}
}

export default API_BOOK


