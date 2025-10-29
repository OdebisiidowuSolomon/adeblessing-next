import type { Metadata } from "next";
import { rootUrl } from "./sitemap";


export const metadata: Metadata = {
  title: {
    default: "Ade Blessing Salon",
    template: "%s | Ade Blessing Salon"
  },
  description: "",
  keywords: ['Ade blessing', 'Adeblessing', 'salon', 'Cosmetology', 'hair & coloring', 'Breast Augmentation', 'Body Lift', 'Men haircut', 'haircut', 'logistics', 'whycespace'],
  metadataBase: new URL(rootUrl),
  openGraph:{
    description:'Our beauty technicians do high-quality work, and we are proud of it at AdeBlessing Salon. In addition to offering our clients the greatest services and competitive pricing, we also maintain the highest standards of professionalism and hygiene.'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
