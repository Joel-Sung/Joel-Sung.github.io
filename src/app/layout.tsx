import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/global.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joel Sung's Portfolio Page",
  description:
    "This web application lists Joel Sung's work experiences, past projects, education, co-curricular activities and certifications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
