import type { Metadata } from "next";
import { WrapThemeProvider, defaultTheme } from "@/providers/mui-theme/mui-theme";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  applicationName: process.env.NEXT_PUBLIC_APP_NAME,
  generator: process.env.NEXT_PUBLIC_APP_NAME,
  keywords: process.env.NEXT_PUBLIC_APP_KEYWORDS,
  category: process.env.NEXT_PUBLIC_APP_CATEGORY,

  description: process.env.NEXT_PUBLIC_APP_DESC,

  creator: process.env.NEXT_PUBLIC_APP_OWNER,
  publisher: process.env.NEXT_PUBLIC_APP_OWNER,

  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ''),
  manifest: process.env.NEXT_PUBLIC_BASE_URL + "/manifest.json",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={process.env.NEXT_PUBLIC_LANG_DEFAULT || "en"}>
      <body>
        <WrapThemeProvider theme={defaultTheme}>
          {children}{" "}
        </WrapThemeProvider>
      </body>
    </html>
  );
}
