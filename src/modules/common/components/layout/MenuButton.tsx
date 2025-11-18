"use client";
import { useContext } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MenuContext } from "../../context/MenuProvider";

const MenuButton = () => {
  const { active, setActive } = useContext(MenuContext);
  return (
    <button
      type="button"
      className="block md:hidden text-2xl cursor-pointer"
      onClick={() => setActive(!active)}
    >
      <CgMenuGridO />
    </button>
  );
};

export default MenuButton;
