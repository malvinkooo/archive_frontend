import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import MainNav from "../../components/MainNav";
import SimpleSearch from "../../components/SimpleSearch";
import ExtendedSearch from "../../components/ExtendedSearch";

const Main = () => (
    <>
        <header>
            <HeaderTitle />
            <MainNav />
        </header>
        

        <main className="page">
            <SimpleSearch />
            <ExtendedSearch />
        </main>
    </>
);

export default Main;
