import { FormEvent, FormEventHandler, useEffect, useRef, useState } from 'react';



const Register:React.FC = () => {

  const [username, setUsername] = useState<string>("");
  const [isUserValid, setIsUserValid] = useState<boolean>(false);
  const userRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState<string>("");
  const [isPassValid, setIsPassValid] = useState<boolean>(false);
  const passRef = useRef<HTMLInputElement>(null);


  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isPassMatch, setIsPassMatch] = useState<boolean>(false);
  const matchPassRef = useRef<HTMLInputElement>(null);


  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


  useEffect(() => {
    userRef?.current?.focus();
  }, []);


  useEffect(() => {
    const isValid = USER_REGEX.test(username);
    setIsPassMatch(isValid);
  }, [username]);


  useEffect(() => {
    const isValid = PWD_REGEX.test(password);
    setIsUserValid(isValid);
  }, [password]);


  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  return(
    <div className="flex flex-col gap-3 mx-auto my-10 py-2 w-1/2 h-1/2 bg-blue-300 rounded-lg">
      <p className="text-center text-2xl m-2 text-orange-400">Register</p>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <div className="mx-auto">
            <input
              type="text" 
              ref={userRef}
              autoComplete='false' 
              placeholder="username" 
              required
              className="p-2 border-2 rounded-lg focus:outline-none"
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="mx-auto">
            <input 
              type="password" 
              ref={passRef}
              placeholder="password" 
              required
              autoComplete='false'
              className="p-2 border-2 rounded-lg focus:outline-none" 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="mx-auto">
            <input
              type="password" 
              ref={matchPassRef}
              placeholder="confirm password" 
              required
              autoComplete='false'
              className="p-2 border-2 rounded-lg focus:outline-none"
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>
        </div>
        <div className="text-center">
          <button 
          type="submit"
          className="text-white px-1 py-2 m-2 bg-orange-400 rounded-lg">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register;