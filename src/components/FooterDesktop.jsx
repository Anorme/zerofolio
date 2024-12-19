import { CONTACT } from "../constants";

const FooterDesktop = () => {
  return (
    <div className="hidden border-b border-neutral-900 lg:pt-20 lg:flex justify-between">
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

export default FooterDesktop