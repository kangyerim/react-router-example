import React from "react";
import { Link } from "react-router-dom";
import { PageTemplate } from "./index"

const Home = () => <div className="home">
    <h1> home </h1>
    <nav>
        <Link to="about"> [회사소개] </Link>
        <Link to="event"> [이벤트] </Link>
        <Link to="products"> [제품] </Link>
        <Link to="contacts"> [고객 지원] </Link>
    </nav>
</div>

export default Home