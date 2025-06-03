"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';

const container = {
  hidden:{opacity:0},
  show :{
      opacity:1,
      transition:{
          staggerChildren: 0.3,
          delayChildren:0.5
      }
  }
}

const item={
  hidden:{scale:0},
  show:{scale:1}
}

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // email.js is not implemneted
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//         publicKey: 'YOUR_PUBLIC_KEY',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };
  const onSubmit = data => {
    const toastId = toast.loading("Sending you message, please wait...")
    console.log(data)
    setTimeout(()=>{
        // toast.success("I have received your message, I will get back to you soon.",{id:toastId})
        // toast.error('Sorry ',{id:toastId})
        toast.error('There was an error processing your request, please try again later!',{id:toastId})
    },1000)
    };
  console.log(errors);
  
  return (
    <>
    <div className='flex flex-col items-center gap-5'>
    <a href="mailto:jayantaggarwal55@gmail.com" >
      <button className="px-5 py-2 text-white border border-yellow-200 rounded cursor-pointer backdrop-blur bg-transparent">
        Mail: jayantaggarwal55@gmail.com
      </button>
    </a>
    <a href="tel:+1234567890">
    <button className="px-5 py-2 text-white border border-yellow-200 rounded cursor-pointer backdrop-blur bg-transparent">
        Call +91 9711079494
      </button>
    </a>
    </div>
    {/* <Toaster richColors={true} theme={"light"} closeButton={true} position="top-center"/>
    <motion.form onSubmit={handleSubmit(onSubmit)}
    variants={container}
    initial="hidden" animate="show"
    className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
      <motion.input variants={item}
      type="text" placeholder="name" {...register("name", {required: 'this field is required!',minLength:{value:3,message:'Name should be atleast 3 characters long.'}})} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {
        errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>
      }
      <motion.input variants={item}
      type="email" placeholder="email" {...register("email", {required: 'this field is required!'})}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {
        errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>
      }
      <motion.textarea variants={item}
      placeholder="message" {...register("message", {required: 'this field is required!', maxLength: {value:256,message:"Message should be less than 256 characters"}, minLength:  {value:10,message:"Message should be minimum 10 characters"}})} 
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      {
        errors.message && <span className='inline-block self-start text-accent'>{errors.message.message}</span>
      }

      <motion.input variants={item}
      value="cast your message"
      className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/50 border-solid 
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50
      cursor-pointer capitalize' 
      type="submit" />
    </motion.form> */}
    </>
  );
}