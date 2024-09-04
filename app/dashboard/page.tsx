import { Suspense } from "react";

import { getExperienceAction } from "@/backend/actions/getExperienceAction";
import Loading from "./loading";

import ExperienceDashboardSection from "../components/ExperienceDashboardSection";

export default async function Dashboard() {
  // const user = await db.selectFrom("user").selectAll().execute();
  const experiences = await getExperienceAction();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1>Admin dashboard</h1>
      <Suspense fallback={<Loading />}>
        <ExperienceDashboardSection experiences={experiences} />
      </Suspense>
    </main>
  );
}
