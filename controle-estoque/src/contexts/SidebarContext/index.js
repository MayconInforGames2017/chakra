import { useDisclosure } from "@chakra-ui/react"
import { createContext, useContext } from "react"

const SidebarProvider = ({ children }) => {
    const disclosure = useDisclosure();

    return (
        // eslint-disable-next-line react/jsx-no-undef
        <SidebarContext.Provider value={disclosure}>
            { children }
        </SidebarContext.Provider>
    )
}

export const useSiderbarContext = () => useContext(SidebarContext)