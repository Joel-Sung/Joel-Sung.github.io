import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/global.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your App Title", // Update with your app's metadata
  description: "Your app description",
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
