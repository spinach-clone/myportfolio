import type { CSSProperties } from "react";
import styles from "./folder.module.css";

type FolderProps = {
  color?: string;
  className?: string;
};

function darkenColor(hex: string, percent: number) {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.floor(((num >> 16) & 0xff) * (1 - percent));
  const g = Math.floor(((num >> 8) & 0xff) * (1 - percent));
  const b = Math.floor((num & 0xff) * (1 - percent));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

export function Folder({ color = "#5227FF", className = "" }: FolderProps) {
  const style = {
    "--folder-color": color,
    "--folder-back-color": darkenColor(color, 0.08),
    "--paper-1": "#E6E6E6",
    "--paper-2": "#F2F2F2",
    "--paper-3": "#FFFFFF",
  } as CSSProperties;

  return (
    <div className={`${styles.folder} ${className}`} style={style}>
      <div className={styles.folderBack}>
        <div className={styles.paper} />
        <div className={`${styles.paper} ${styles.paper2}`} />
        <div className={`${styles.paper} ${styles.paper3}`} />
        <div className={styles.folderFront} />
        <div className={`${styles.folderFront} ${styles.right}`} />
      </div>
    </div>
  );
}
