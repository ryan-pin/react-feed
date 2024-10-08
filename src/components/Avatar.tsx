import { ImgHTMLAttributes } from "react";
import styles from "../style/Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({ hasBorder = true, ...props }:AvatarProps){
    return(
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        {...props}
        />
    )
}