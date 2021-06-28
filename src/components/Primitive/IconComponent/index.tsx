import { ReactNode } from "react";

interface IconComponentProps {
    children: ReactNode;
}

export function IconComponent({children}:IconComponentProps) {
    return(
        <span className="material-icons">{children}</span>
    )
}