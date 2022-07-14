import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductListing from "./Pages/ProductListing";
import ProductDetail from "./Pages/ProductDetail";
import AdminLogin from "./Pages/adminLogin";
import Cart from "./Pages/Cart";

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route exact path="/"></Route>
					<Route path="category">
						<Route path=":id" element={<ProductListing />}></Route>
					</Route>
					<Route path="productdetails">
						<Route path=":prodCategory">
							<Route path=":prodId" element={<ProductDetail />} />
						</Route>
					</Route>
					<Route path="cart" element={<Cart />}></Route>

					<Route path="admin" element={<AdminLogin />}></Route>
				</Routes>
			</Layout>
		</>
	);
}

export default App;
