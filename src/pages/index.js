import Layout from "@/containers/Layout";
import { useAuth } from "@/context/AuthContext";

const HomePage = () => {
    const user = useAuth()
    return (
        <Layout>
            <div className="container mx-auto lg:max-w-screen-xl">
                <h1 className="text-2xl font-black">this is home page</h1>
            </div>
        </Layout>
    );
}

export default HomePage;