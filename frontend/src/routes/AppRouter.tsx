import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "@/components/Chat";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Chat />} />
            </Routes>
        </Router>
    );
}
