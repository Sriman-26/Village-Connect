import React from "react";
function Footer(){
    return(
        <footer className="bg-blue-900 text-white py-6 mt-10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-xl font-bold mb-4">Village Connect</h2>
                <p>Email:{" "} <a href="mailto:villagesupport@gmail.com"
                className="underline hover:text:text-yellow-300 mb-3">villagesupport@gmail.com</a>
                </p>
                <p className=" mt-3 mb-3">Phone :+91 83285 96786</p>
                <p className="mb-3"> Address: Ramanapadu, Vijayawada, AP</p>
                <p className="mt-3 text-sm text-gray-200">
                    &#169; {new Date().getFullYear()} Village Connect.All rights Reserved
                </p>
            </div>
        </footer>
    );
}
export default Footer;