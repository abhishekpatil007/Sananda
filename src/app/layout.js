import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";

export const metadata = {
  title: "SANANDA HOUSING PRIVATE LIMITED | Construction & Interior Design",
  description: "Leading construction and interior design company in Bangalore. Specializing in residential villas, commercial spaces, custom furniture, and office interiors since 2010.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
