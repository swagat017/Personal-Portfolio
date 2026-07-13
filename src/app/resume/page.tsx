import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Resume } from "@/components/sections/resume";

export default function ResumePage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Resume />
            </main>
            <Footer />
        </>
    );
}