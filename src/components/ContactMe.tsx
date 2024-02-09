'use client'
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        window.location.href = `mailto:m.carneiro.tech@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
    };


    return (
        <>
            <div
                className={"h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}>
                <h3 className={"absolute top-12 uppercase tracking-[20px] text-2xl text-gray-500"}>
                    Contact
                </h3>

                <div className={"flex flex-col space-y-10"}>
                    <h4 className={"text-4xl font-semibold text-center"}>
                        I've got just what you need.{" "}
                        <span className={"decoration-[#99FF33]/50 underline"}>Let's talk.</span>
                    </h4>

                    <div className={"space-y-10 "}>
                        <div className={"flex items-center space-x-5 justify-center"}>
                            <PhoneIcon className={"text-[#99FF33] h-7 w-7 animate-pulse"} />
                            <p className={"text-2xl"}>+55 21 972604707</p>
                        </div>

                        <div className={"flex items-center space-x-5 justify-center"}>
                            <EnvelopeIcon className={"text-[#99FF33] h-7 w-7 animate-pulse"} />
                            <p className={"text-2xl"}>matheus.carneiro.dev@gmail.com </p>
                        </div>

                        <div className={"flex items-center space-x-5 justify-center"}>
                            <MapPinIcon className={"text-[#99FF33] h-7 w-7 animate-pulse"} />
                            <p className={"text-2xl"}>Casa dos Tolos n0</p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={"flex flex-col space-y-2 w-fit mx-auto"}>
                        <div className={"flex space-x-2"}>
                            <input
                                {...register('name')}
                                placeholder={"Name"}
                                className={"contactInput"}
                                type="text" />
                            <input
                                {...register('email')}
                                placeholder={"Email"}
                                className={"contactInput"}
                                type="email" />
                        </div>

                        <input
                            {...register('subject')}
                            placeholder={"Subject"}
                            className={"contactInput"}
                            type="text" />

                        <textarea
                            {...register('message')}
                            placeholder={"Message"} className={"contactInput"} />

                        <button
                            type={"submit"}
                            className={"bg-[#99FF33] py-5 px-10 rounded-md text-black font-bold"}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};