import { createRoot } from "react-dom/client";
import tailwindCSS from "./tailwindCSS";
import './tailwind.css';
import FrameworkList from "./frameworkList";
import FrameworkListSearchFilter from "./frameworkListSearchFilter";
import Responsive from "./Responsive";

createRoot(document.getElementById("root"))
    .render(
        <div>
                {/* <FrameworkList/>*/}
                <FrameworkListSearchFilter/>
                {/* <Responsive/> */}
        </div>
    )