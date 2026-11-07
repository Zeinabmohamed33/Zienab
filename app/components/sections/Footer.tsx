import { personalInfo } from "@/lib/data";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6 lg:px-8">
      <p>
        © {new Date().getFullYear()} {personalInfo.name}
      </p>
      <p>Built with Next.js, TypeScript and Tailwind CSS</p>
    </div>
  </footer>
);

export default Footer;
