const Login = () => {
  return (
    <>
      <h1>Login</h1>

      <form>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}
export default Login
