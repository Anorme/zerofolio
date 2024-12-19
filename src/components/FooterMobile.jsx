import { CONTACT } from "../constants";
const FooterMobile = () => {
  return (
    <div className="border-b border-neutral-900 flex flex-col lg:hidden">
    {CONTACT.map((contact,i) => {
      const {address, phoneNo, email, name, Icon} = contact;
      return (
        <div key={i} className="text-center tracking-tighter flex flex-col lg:flex-row place-content-center align-middle justify-between">
          <p className="flex p-2 place-content-center items-center">
            {address}
            {phoneNo}
            {email}
            {name}
            <Icon className="ml-2"/>
          </p>
      </div>
      )
    })}
  </div>
  )
}

export default FooterMobile