'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Emailer = () => {
    const form = useRef();
    const sendEmail = (e: any) => {
        e.preventDefault();

        const email_params = {
            from_name: 'horizon',
            to_name: 'tol',
            message: 'semoga sehat selalu'
        }

        emailjs
            .send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? "",
                email_params,
                process.env.NEXT_PUBLIC_EMAIL_API_KEY ?? "")
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Emailer