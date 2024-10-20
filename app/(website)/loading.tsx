import Spinner from "@/components/ui/spinner";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex h-screen items-start justify-center py-20">
      <Spinner variant="light" />
    </div>
  );
}
