import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-5 text-center bg-[var(--color-bg)]">
      <h1 className="text-[12rem] font-bold text-[var(--color-primary-light)] leading-none">404</h1>
      <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4 -mt-10 relative z-10">
        Page Not Found
      </h2>
      <p className="text-lg text-[var(--color-text-muted)] max-w-md mb-8">
        Oops! The page you are looking for might have been removed or doesn&apos;t exist.
      </p>
      <Button asChild size="lg">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
