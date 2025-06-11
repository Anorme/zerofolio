import { Link } from "react-scroll";
import { useClickAway } from "react-use";
import {useState, useRef} from 'react';
import {routes} from "../routes";
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from "framer-motion";

const NavMobile = () => {
  const [isOpen, setOpen] =useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="fixed z-40 top-0 left-0 right-0 bg-neutral-950 border-none ">
      <nav className=" w-full flex items-center justify-between px-1 py-1 lg:py-5">
        <div className="flex flex-shrink-0 items-center w-1/2">
          <span className="text-xl font-semibold ml-4 whitespace-nowrap">
            <Link 
              to="hero"
              smooth={true}
              duration={500}
            >
              Anorme Inkumsah
            </Link>
          </span>
        </div>
        <div ref={ref} className="lg:hidden mr-2">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          <AnimatePresence>
            {isOpen && (
              <motion.div 
              initial={{ opacity: 0}}
              animate={{opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.2}}
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-0 pt-0 bg-neutral-950 border-none">
                <ul className="grid gap-2">
                  {routes.map((route, idx) => {
                    const { title, id } = route;

                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1}}
                        transition={{ 
                          type: "tween",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        key={title}
                        className="w-full p-[0.08rem]  "
                      >
                        <Link 
                          to={id}
                          smooth={true} 
                          duration={500} 
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                          }
                          href={id}
                        >
                          <span className="flex gap-1 text-lg">{title}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  )
}

export default NavMobile