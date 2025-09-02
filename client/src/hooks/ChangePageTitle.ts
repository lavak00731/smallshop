import { useEffect } from "react"

const ChangePageTitle = ({pageTitle}:{pageTitle:string}) => {
    useEffect(() => {
      document.title = pageTitle 
    
      return () => {
        document.title = ""
      }
    })
    
}

export default ChangePageTitle