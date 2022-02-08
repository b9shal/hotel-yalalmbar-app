

const Register:React.FC = () => {
  return(
    <div className="flex flex-col gap-3 mx-auto my-10 py-2 w-1/2 h-1/2 bg-blue-300 rounded-lg">
      <p className="text-center text-2xl m-2 text-orange-400">Register</p>
      <div className="flex flex-col gap-3">
        <div className="mx-auto">
          <input type="text" placeholder="username" className="p-2 border-2 rounded-lg focus:outline-none" />
        </div>
        <div className="mx-auto">
          <input type="text" placeholder="password" className="p-2 border-2 rounded-lg focus:outline-none" />
        </div>
        <div className="mx-auto">
          <input type="text" placeholder="retype-password" className="p-2 border-2 rounded-lg focus:outline-none" />
        </div>
      </div>
      <div className="text-center">
        <a className="text-white bg-orange-400 rounded-lg">Register</a>
      </div>
    </div>
  )
}

export default Register;