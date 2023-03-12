import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tours from "../Tours/Tours";
const tourdata = require("../../data/db.json");



function Home (){
    return (
        <>
        <Header/>
        <Tours arrData={tourdata}/>
        <Footer/>
        </>
    )
}

export default Home;