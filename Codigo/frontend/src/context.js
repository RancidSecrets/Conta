import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'

export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    formSignup: {
      name: '',
      email: '',
      password: '',
      role: '',
      property_id: ''
    },
    formLogin: {
      email: '',
      password: ''
    },
    property:{
      name: "",
      amount: "", 
      description:""
    },
    isLoggedIn: false,
    msg: 'Landing page'
  }


  // handleInput = (e, obj) => {
  //   const { name, value } = e.target
  //   obj[name] = value
  //   this.setState({ obj })
  // onChange={ (e) => handleInput(e, 'formSignup')}

  // }

  handleSelectRole = (e, role) => {
    e.preventDefault()

    this.setState(prevState => ({
      ...prevState,
      formSignup: {
        ...prevState.formSignup,
        role
      }
    }))

    this.props.history.push('/signup')
  }

  handleSignupInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      formSignup: {
        ...prevState.formSignup,
        [name]: value
      }
    }))
  }

  handleLoginInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      formLogin: {
        ...prevState.formLogin,
        [name]: value
      }
    }))
  }

  handleSignupSubmit = e => {
    e.preventDefault()
    const { name, email, password } = this.state.formSignup
    AUTH_SERVICE.signup({ name, email, password })
      .then(({ data }) => {
        this.setState(prevState => ({
          ...prevState,
          formSignup: {
            name: '',
            email: '',
            password: ''
          }
        }))

        this.props.history.push('/login')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  handleFile = e => {
    const formData = new FormData()
    formData.append('photoURL', e.target.files[0])
    AUTH_SERVICE.uploadPhoto(formData)
      .then(({ data }) => {
        this.setState({ loggedUser: data.user })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state.formLogin
    AUTH_SERVICE.login({ email, password })
      .then(({ data }) => {
        this.setState(prevState => ({
          ...prevState,
          formLogin: {
            email: '',
            password: ''
          },
          loggedUser: data.user,
          isLoggedIn: true
        }))
        this.props.history.push('/profile')
      })
      .catch((err) => {
        console.log(err)
        alert('Algo salió mal 🥺😭')
      })
  }


  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleLoginInput,
      handleLoginSubmit,
      handleFile,
      handleSelectRole
    } = this
    return (
      <MyContext.Provider
        value={{
          state,
          handleSelectRole,
          handleSignupInput,
          handleSignupSubmit,
          handleLoginInput,
          handleLoginSubmit,
          handleFile
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default withRouter(MyProvider)