

const Login:React.FC = () => {
  return(
    <div className="flex flex-col gap-3 mx-auto my-10 py-20 w-1/2 h-3/4 bg-blue-300 rounded-lg">
      <p className="text-center text-2xl text-orange-400">Login</p>
      <div className="flex flex-col gap-3 justify-center">
        <div className="mx-auto">
          <input type="text" placeholder="username" className="p-2 border-2 rounded-lg focus:outline-none" />
        </div>
        <div className="mx-auto">
          <input type="password" placeholder="password" className="p-2 border-2 rounded-lg focus:outline-none" />
        </div>
      </div>
      <div className="text-center">
        <button className="px-6 py-3 text-center text-white bg-orange-400 rounded-lg">Login</button>
      </div>
      <a href="/login" className="text-white text-center text-lg my-2 cursor-pointer">
        Forgot Password
      </a>
    </div>
  )
}

export default Login;