import * as React from "react";
import { useTheme } from "~/components/theme-provider";

export function ThemeAwareFavicon() {
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    // Find the main favicon link (without sizes attribute) or create one
    let faviconLink = document.querySelector(
      'link[rel="icon"]:not([sizes])',
    ) as HTMLLinkElement;

    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.rel = "icon";
      document.head.appendChild(faviconLink);
    }

    // Update favicon based on theme
    const faviconPath =
      resolvedTheme === "dark"
        ? "/images/bustamam-tech-favicon-dark.png"
        : "/images/bustamam-tech-favicon.png";

    faviconLink.href = faviconPath;
  }, [resolvedTheme]);

  return null;
}
