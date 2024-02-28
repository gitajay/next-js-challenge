"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import styles from "@/app/page.module.css";
import { setOpen } from "@/lib/features/userSlice.js";

export default function Header() {
  const { userData } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <div className={styles.description}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/WaybleLogo.png"
          alt="WaybleLogo Logo"
          width={180}
          height={37}
          priority
        />
      </Link>
      <div>
        {userData ? <p>Hello, {userData}</p> :
        <Button as="a" variant="primary" style={{ color: "white" }} onClick={() => dispatch(setOpen(true))}>
          Sign in
        </Button>}
      </div>
    </div>
  ) 
}