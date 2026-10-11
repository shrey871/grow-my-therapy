import "./globals.css";

export const metadata = {
  title: "Anxiety, Trauma & Burnout Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description: "In-person therapy in Santa Monica and telehealth across California for high-achieving adults. CBT, EMDR, somatic and mindfulness approaches.",
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
