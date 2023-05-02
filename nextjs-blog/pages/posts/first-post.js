import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

import Layout from '../../components/layout'

export default function FirstPost({ text }) {
	return (<Layout>

		<Head>
			<title>First Post</title>
		</Head>

		<h1> {text ? text: 'First Post'} </h1>
		
		
		</Layout>)
}