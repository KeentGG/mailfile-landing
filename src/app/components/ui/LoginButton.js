import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LoginButton({
  isSignUp = false,
  href = "/",
  target = "_blank",
}) {
  return (
    <Link href={href} target={target}>
      <span
        className={cn(
          "py-2 px-5 inline items-center justify-center tracking-wider align-middle duration-500 text-sm text-center font-semibold rounded-full border bg-aqua-400 hover:bg-aqua-700/70 hover:text-aqua-400 border-aqua-400 hover:border-aqua-500 text-aqua-800 md:bg-aqua-700/30 md:border-aqua-600/40 md:text-aqua-400 md:hover:bg-aqua-700",
          isSignUp &&
          "md:bg-aqua-400 md:border-aqua-400 md:hover:border-aqua-600/40 md:text-aqua-800 md:hover:bg-aqua-700/70 md:hover:text-aqua-400",
        )}
      >
        {isSignUp ? "Signup" : "Login"}
      </span>
    </Link>
  );
}
