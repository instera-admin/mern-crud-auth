import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginRequest } from '../api/auth'
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signin, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect - isAuthenticated: " + isAuthenticated)
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        console.log(values)
        signin(values)
        const res = await loginRequest(values)
        console.log(res)
    })


    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <h1 className="text-2xl font-bold">Login</h1>
                <form onSubmit={onSubmit}>
                    <input type="email"
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <p className="text-red-500">email is required</p>
                    )}

                    <input type="password"
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && (
                        <p className="text-red-500">password is required</p>
                    )}
                    
                    <button className="inline-flex items-center justify-center h-8 px-5 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                    type="submit">login</button>
                    
                </form>
            </div>

        </div>
    );
}

export default LoginPage;