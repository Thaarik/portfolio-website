import { supabase } from "@/lib/supabase/server";
import type { Experience, Project, Skill } from "@/lib/portfolio-types";

export async function getPortfolioData(): Promise<{
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
}> {
  const [experienceResult, skillsResult, projectsResult] = await Promise.all([
    supabase
      .from("experience")
      .select("*")
      .eq("visible", true)
      .order("sort_order", { ascending: true }),
    supabase
      .from("skills")
      .select("*")
      .order("sort_order", { ascending: true }),
    supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true }),
  ]);

  if (experienceResult.error) {
    throw new Error(
      `Error fetching experience data: ${experienceResult.error.message}`,
    );
  }

  if (skillsResult.error) {
    throw new Error(
      `Error fetching skills data: ${skillsResult.error.message}`,
    );
  }

  if (projectsResult.error) {
    throw new Error(
      `Error fetching projects data: ${projectsResult.error.message}`,
    );
  }

  return {
    experience: experienceResult.data.map((item) => ({
      id: item.id,
      styleType: item.style_type,
      date: item.date,
      visible: item.visible,
      title: item.title,
      company: item.company,
      school: item.school,
      location: item.location,
      description: item.description,
      notes: item.notes,
    })),

    skills: skillsResult.data.map((item) => ({
      id: item.id,
      name: item.name,
      logo: item.logo,
      definition: item.definition,
    })),

    projects: projectsResult.data.map((item) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      definition: item.definition,
      liveUrl: item.live_url,
    })),
  };
}
