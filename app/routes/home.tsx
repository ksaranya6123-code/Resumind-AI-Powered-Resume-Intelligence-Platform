import type { Route } from "./+types/home";
import {resumes} from "../constants";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const {auth} = usePuterStore();
  const navigate = useNavigate();
  useEffect(() => {
    if(!auth.isAuthenticated){
      navigate('/auth?next=/');
    }
  },[auth.isAuthenticated]);

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className = "main-section">
      <div className="page-heading py-16">
          <h1>AI-Powered Resume Intelligence</h1>
          <h2>Analyze your resume, measure ATS compatibility, discover skill gaps, and optimize your profile for your target job.</h2>
      </div>

      {(resumes.length > 0) && (
          <div className="resumes-section">
            {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
      )}

    </section>
  </main>;
}
