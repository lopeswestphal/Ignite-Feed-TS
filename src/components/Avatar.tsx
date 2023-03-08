import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

/*
No javaS podemos trabalhar com desestruturação:
const name = { title: "Lopes"}
const { tittle } = name;
*/

// Extrategia hack para trabalhamos com mais produtividade no TS:
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    );
}