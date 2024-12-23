import Navbar from "../components/Navbar";
import RepositoryList from "../components/RepositoryList";
import Sidebar from "../components/Sidebar";

function Dashboard() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full">
            <div className="block lg:hidden z-50">
                <Navbar />
            </div>

            <div className="hidden lg:flex h-full w-[242px] flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>

            <div className="lg:bg-[#FAFAFA] pt-16 lg:pt-0 lg:pl-[242px] h-full w-full">
                <div className="lg:p-6 h-full lg:max-w-screen-2xl lg:mx-auto w-full">
                    <RepositoryList />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;