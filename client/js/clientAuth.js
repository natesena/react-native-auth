import axios from 'axios'
// import jwtDecode from 'jwt-decode'
// import {AsyncStorage} from 'react-native'

// const clientAuth = axios.create()
// clientAuth.defaults.headers.common.token = getToken()

// function getToken() {
// 	const token = AsyncStorage.getItem('token', (err, token)=>{
// 		//console.log('tried to get token: ',token)
// 		if(token){
// 			//console.log('token: ', token)
// 			return token
// 		}
// 		return err
// 	})
// 	//console.log('the promise object returned by Asyncstorage', token)
// }

// function setToken(token) {
// 	AsyncStorage.setItem('token', token, (err)=>{
// 		if(err){
// 			console.log(err)
// 		}
// 	})
// 	return token
// }

// function getCurrentUser() {
// 	const token = getToken()
// 	if(token){
// 		console.log('token:',token)
// 		return jwtDecode(token)
// 	} 
// 	return null
// }

// function logIn(credentials) {
// 	return clientAuth({ method: 'post', url: '/api/users/authenticate', data: credentials })
// 		.then(res => {
// 			console.log('------------response in clientauth login------------', res)
// 			const token = res.data.token
// 			//console.log('clientauth Login current token: ', token)
// 			if(token) {
// 				clientAuth.defaults.headers.common.token = setToken(token)
// 				return jwtDecode(token)
// 			} else {
// 				return false
// 			}
// 		})
// }

// // logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
// function signUp(userInfo) {
// 	return clientAuth({ method: 'post', url: '/api/users', data: userInfo})
// 		.then(res => {
// 			console.log('then response',res)
// 			const token = res.data.token
// 			if(token) {
// 				clientAuth.defaults.headers.common.token = setToken(token)
// 				return jwtDecode(token)
// 			} else {
// 				return false
// 			}
// 		})
// 		.catch(err =>{
// 			console.log('we got an err back: ',err)
// 		})
// }

// function logOut() {
// 	AsyncStorage.removeItem('token')
// 	delete clientAuth.defaults.headers.common.token
// 	return true
// }


// export default {
// 	getCurrentUser,
// 	logIn,
// 	signUp,
// 	logOut
// }
