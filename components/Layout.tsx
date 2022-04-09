import { ReactChild } from "react";
import Navbar from "./Navbar";
const Layout = ({ children }: {children: ReactChild}) => {
    return (
        <div>
            <Navbar />
            <div style={{ "height": "63px" }}></div>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;