import Head from "next/head";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Rambla:wght@700&display=swap"
					rel="stylesheet"
				/>
				<title>Petshop</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="m-0 p-0 box-border scrollbar-thumb:bg-red-500 scrollbar-track:rounded">{children}</div>
		</>
	);
};

export default Layout;
