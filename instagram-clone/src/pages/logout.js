import { useEffect } from 'react'
import { logout } from 'route/firebase.js'

export default function Logout() {

	useEffect(() => {
		logout()
	})

	return null

}
