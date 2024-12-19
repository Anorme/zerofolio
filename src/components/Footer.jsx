import { CONTACT } from "../constants";

const Footer = () => {
  return (
    <div className="border-b border-neutral-900 lg:pt-20 ">
    <div className="text-center tracking-tighter flex flex-col lg:flex-row place-content-center align-middle justify-between">
      <p className="my-4 ">{CONTACT.address}</p>
      <p className="my-4">{CONTACT.phoneNo}</p>
      <p className="my-4 no-underline ">{CONTACT.email}</p>
      <p className="my-4">AnormeInkumsah2024</p>
    </div>
    
  </div>
  )
}

export default Footer