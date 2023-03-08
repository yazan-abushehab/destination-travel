import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tours from "../Tours/Tours";
const tourdata = require("/home/yazan/win-home/desktop/destination-travel/src/data/db.json");



function Home (){
    return (
        <>
        <Footer/>
        <Header/>
        <Tours arrData={tourdata}/>
        </>
    )
}

export default Home;