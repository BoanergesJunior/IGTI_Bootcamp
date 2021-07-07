import { useAtom } from "jotai"
import Switch from "react-switch"
import { themeAtom } from "../global"
import { IconContext } from "react-icons"
import { IoMoon, IoSunny } from "react-icons/all"

const ThemeSwitch = () => {
  const [theme, setTheme] = useAtom(themeAtom)

  function handleTheme() {
    return theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <IconContext.Provider value={{ color: "yellow" }}>
      <Switch
        onColor={"#041301"}
        offColor={"#76c919"}
        onChange={handleTheme}
        checked={theme === "dark"}
        checkedIcon={
          <IoMoon
            size={"1.2rem"}
            style={{ paddingLeft: "8px", paddingTop: "4px" }}
          />
        }
        uncheckedIcon={
          <IoSunny
            size={"1.2rem"}
            style={{ paddingLeft: "4px", paddingTop: "4px" }}
          />
        }
      />
    </IconContext.Provider>
  )
}

export default ThemeSwitch
