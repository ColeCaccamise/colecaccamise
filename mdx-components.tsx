import { useMDXComponents as getNextraComponents } from "nextra/mdx-components";
import type { MDXComponents } from "nextra/mdx-components";
import Link from "next/link";
import VideoPlayer from "@/components/ui/video";
import CustomImage from "@/components/ui/image";
import Button from "@/components/ui/button";

const defaultComponents = getNextraComponents({
  wrapper: ({ children }) => <>{children}</>,
});

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    VideoPlayer,
    CustomImage,
    Button,
    Link,
    ...components,
  };
}
