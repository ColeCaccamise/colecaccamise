import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import SoloFounderToolsForm from "./form";

export default function SoloFounderTools() {
  return (
    <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-12 px-4 md:px-0">
      <div className="flex flex-col gap-6">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-low-contrast-text">
            Solo Founder Tools
          </span>
          <h1 className="text-2xl font-bold md:text-4xl">
            30+ tools & resources to build (and finally launch) your SaaS
          </h1>
          <p className="text-base text-low-contrast-text">
            Join my free newsletter and receive the list instantly...
          </p>
        </div>

        <Suspense
          fallback={
            <div className="h-[66px] w-full animate-pulse rounded bg-ui-component-default"></div>
          }
        >
          <SoloFounderToolsForm />
        </Suspense>
      </div>

      <div className="flex h-[110px] items-center justify-center gap-2">
        <span className="text-sm text-low-contrast-text">Powered by</span>
        <Link href="https://creatorkiwi.com?ref=solo-founder-tools">
          <Image
            src="/images/logos/creatorkiwi.svg"
            alt="Creator Kiwi"
            width={110}
            height={110}
          />
        </Link>
      </div>
    </div>
  );
}
