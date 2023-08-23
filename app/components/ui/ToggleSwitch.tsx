import { useState, useEffect } from 'react'
import { useTheme } from "next-themes";
import variable from '../Main.module.scss'


interface ToggleProps { 
  isToggled: boolean;
  onToggled: ()=> void;
}


const ToggleSwitch = ({isToggled, onToggled}: ToggleProps) => {

  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  // const [isToggled, setIsToggled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  const handleDarkMode =()=> {
    isToggled ? setTheme('light') : setTheme('dark')
  }

  return ( 
    <label className={variable.toggle}>
      <input 
        type="checkbox" 
        checked={isToggled} 
        onChange={onToggled} 
        onClick={handleDarkMode} 
      />
      <span className={variable.toggle__slider}></span>
    </label>
   );
}
 
export default ToggleSwitch;