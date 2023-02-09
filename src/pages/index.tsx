import Head from 'next/head'
import React from 'react';
import { Inter } from '@next/font/google'

import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Link href={"/signup"}>
          Регистрация
        </Link>
      <div>
        <h1>Главная страница</h1>
      </div>

    </>
  )
}