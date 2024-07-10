import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";

function Form({handleFormData}){
    const {register, handleSubmit, reset} = useForm();

    const formSubmit = (data) => {
        handleFormData(data);
        reset();
    }
    return(
        <div className="">
            <form className="flex justify-center gap-2 font-xs" action="" onSubmit={handleSubmit(formSubmit)}>
                <input {...register('name')} className="px-4 py-1 rounded-md outline-none" type="text" placeholder="Name" required />
                <input {...register('email')} className="italic px-4 py-1 rounded-md outline-none" type="email" placeholder="Email Address" required />
                <input {...register('url')} className="px-4 py-1 rounded-md outline-none" type="url" placeholder="Image Url" required />
                <input className="px-4 py-1 rounded-md outline-none bg-blue-900 cursor-pointer text-white" type="Submit" />
            </form>

        </div>
    )
}
export default Form;