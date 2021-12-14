async function signIn(username, password) {
	const url = 'https://firefighter-5325.instashop.ae/api/users/login'
	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			username,
			password
		})
	})
	const body = await response.json()

	if(!response.ok){
		throw new Error(body.errorMessage.code)
	}

	return body
}

async function signOut(user) {
	const url = 'https://firefighter-5325.instashop.ae/api/users/logout'
	await fetch(url, {
		headers: {
			'x-sessionToken': user.sessionToken
		}
	})
}

export {
	signIn,
	signOut
}

