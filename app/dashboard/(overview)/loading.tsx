import DashboardSkeleton from "../../ui/skeletons";
// loading skeleton placed in overview folder (Route Group)
// allows it to only apply to the main dashboard page, 
// wihtout affecting URL path or other pages behind the dashboard route

// This file seems to override Suspense boundaries in page.tsx

export default function Loading() {
  return <DashboardSkeleton />;
}