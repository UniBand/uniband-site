import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { Footer, Header } from "@/components/header-footer";

export const metadata: Metadata = {
  title: "UniBand",
  description: "Auckland’s top tertiary-level concert band",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.ico" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
          <cite
            // biome-ignore lint/security/noDangerouslySetInnerHtml: :)
            dangerouslySetInnerHTML={{
              __html:
                "<!-- Website designed and developed by Samuel Ou. https://github.com/S-Ou -->",
            }}
          />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
