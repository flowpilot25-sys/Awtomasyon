import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="relative flex min-h-screen">
        {/* Sidebar — desktop only */}
        <div className="hidden lg:block w-[260px] shrink-0 sticky top-0 h-screen">
          <Sidebar />
        </div>

        {/* Main */}
        <div className="flex-1 min-w-0 flex flex-col">
          <Topbar />
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
