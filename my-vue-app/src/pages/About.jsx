import Navbar from "../components/Navbar.jsx";

function About() {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex justify-center items-center h-screen bg-gray-200">
                <h1 className="text-6xl">About</h1>
            </div>
        </>
    );
}

export default About;