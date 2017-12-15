import {login, logout} from '../../actions/auth'

test('shuld generate login action object', () => {
	const uid = 'adsasd'
	const action = login(uid)
	expect(action).toEqual({
		type: 'LOGIN',
		uid
	})
})

test('should generate logout action object', () => {
	const action = logout()
	expect(action).toEqual({
		type: 'LOGOUT'
	})
})